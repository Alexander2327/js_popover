/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import puppeteer from 'puppeteer';

describe('Page start', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
           headless: false,
           slowMo: 100,
           devtools: true,
        });
        page = await browser.newPage();
    });

    test('Button should render', async () => {
        await page.goto('http://localhost:9000');

        await page.waitForSelector('.btn');
    });

    test('Popover after click', async () => {
        await page.goto('http://localhost:9000');

        await page.waitForSelector('.btn');

        const btn = await page.$('.btn');

        btn.click();
        if (await page.waitForSelector('.popover') !== null) {
            console.log('Exist');
        }

        btn.click();
        if (await page.waitForSelector('.popover') === null) {
            console.log('Does not exist');
        }
    });

    afterEach(async () => {
        await browser.close();
    });
});
