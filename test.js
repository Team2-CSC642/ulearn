const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");

async function tester() {
    var testCount = 0;

    let driver = await new Builder().forBrowser("chrome").build();
    console.log("Initiating Selenium Tests... \n")
    
    console.log("Basic Initial Test Result:");
    try{
        await driver.get("http://localhost:3000/sCalendar");
        await driver.manage().window().maximize();
        var title = await driver.getTitle();
        if(title !== 'uLearn'){
            console.log("Expected Title: uLearn");
            console.log("Found Title:", title);
            throw error;
        }
        else{
            console.log('Basic Initial Test Passed!')
            testCount = testCount + 1
        }
    }
    catch{
        console.log("Basic Initial Test Failed! [X]")
    }

    console.log("\nClass Navigation Test Result:");
    try{
        await driver.findElement(By.className('btn')).click();
        var curURL = await driver.getCurrentUrl();
        if(curURL !== 'http://localhost:3000/sCalendarClass'){
            console.log("Expected URL: http://localhost:3000/sCalendarClass");
            console.log("Found Title:", curURL);
            throw error;
        }
        else{
            console.log('Class Navigation Test Passed!')
            testCount = testCount + 1
        }
    }
    catch{
        console.log("Class Navigation Test Failed! [X]")
    }

    console.log("\nLogout Test Result:");
    try{
        await driver.findElement(By.name('logout')).click();
        var curURL = await driver.getCurrentUrl();
        if(curURL !== 'http://localhost:3000/'){
            console.log("Expected URL: http://localhost:3000/");
            console.log("Found Title:", curURL);
            throw error;
        }
        else{
            console.log('Logout Test Passed!')
            testCount = testCount + 1
        }
    }
    catch{
        console.log("Logout Test Failed! [X]")
    }

    console.log("\nLogin Test Result:");
    try{
        await driver.findElement(By.name('login')).click();

        console.log('Testing case: or 1=1;–');
        await driver.findElement(By.name('j_username')).sendKeys("or 1=1;–");
        await driver.findElement(By.className('login')).click();
        await driver.switchTo().alert().accept();
        await driver.findElement(By.name('j_username')).clear();

        console.log('Testing case: 1=1; drop table notes;');
        await driver.findElement(By.name('j_username')).sendKeys("1=1; drop table notes;");
        await driver.findElement(By.className('login')).click();
        await driver.switchTo().alert().accept();
        await driver.findElement(By.name('j_username')).clear();

        await driver.findElement(By.name('j_username')).sendKeys("student");
        await driver.findElement(By.className('login')).click();
        await driver.findElement(By.className('login')).click();
        var curURL = await driver.getCurrentUrl();
        if(curURL !== 'http://localhost:3000/sCalendar'){
            console.log("Expected URL: http://localhost:3000/sCalendar");
            console.log("Found Title:", curURL);
            throw error;
        }
        else{
            console.log('Login Test Passed!')
            testCount = testCount + 1
        }
    }
    catch{
        console.log("Login Test Failed! [X]")
    }

    console.log("\nTest Pass Ratio: ", testCount,"/4")
    await driver.quit();
}

tester();