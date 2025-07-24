class creatinglyLocators {
  async clickArtBoard() {
    await page.click(
      `//span[contains (., 'Please click here to create the Master Page ')]`,
    );
  }

  async dragAndDropArtBoard() {
    const container = await page.$('[data-testid="Container"]');
    const artboard = await page.$('#section1');

    const containerBox = await container.boundingBox();
    const artboardBox = await artboard.boundingBox();

    if (containerBox && artboardBox) {
      await page.mouse.move(
        containerBox.x + containerBox.width / 2,
        containerBox.y + containerBox.height / 2,
      );
      await page.mouse.down();
      await page.mouse.move(
        artboardBox.x + artboardBox.width / 2,
        artboardBox.y + artboardBox.height / 2,
        { steps: 20 },
      );
      await page.mouse.up();
    }
  }

  async dropChart() {
  await page.waitForSelector('[data-testid="Chart"]', { state: 'visible' });
  await page.waitForSelector('#Container1', { state: 'visible' });

  const chartElement = await page.$('[data-testid="Chart"]');
  const targetContainer = await page.$('#Container1');

  if (!chartElement || !targetContainer) {
    console.error("Required elements not found");
    return;
  }

  await chartElement.scrollIntoViewIfNeeded();
  await targetContainer.scrollIntoViewIfNeeded();

  try {
    await chartElement.dragTo(targetContainer);
    return;
  } catch (e) {
    console.warn("dragTo failed, falling back to manual mouse events");
  }

  const chartBox = await chartElement.boundingBox();
  const containerBox = await targetContainer.boundingBox();

  if (chartBox && containerBox) {
    await page.mouse.move(
      chartBox.x + chartBox.width / 2,
      chartBox.y + chartBox.height / 2,
    );
    await page.mouse.down();

    await page.mouse.move(
      containerBox.x + containerBox.width / 2,
      containerBox.y + containerBox.height / 2,
      { steps: 20 },
    );

    await page.mouse.up();
  } else {
    console.error("Bounding boxes not available");
  }
}


  async resizeChart() {
    await page.waitForSelector('#Container1 canvas.itemCss');

    const chart = await page.$('#Container1 canvas.itemCss');
    const container = await page.$('#Container1');

    const chartBox = await chart.boundingBox();
    const containerBox = await container.boundingBox();

    if (chartBox && containerBox) {
      const startX = chartBox.x + chartBox.width - 5;
      const startY = chartBox.y + chartBox.height - 5;

      const targetX = containerBox.x + containerBox.width - 10;
      const targetY = containerBox.y + containerBox.height - 10;

      await page.mouse.move(startX, startY);
      await page.mouse.down();
      await page.mouse.move(targetX, targetY, { steps: 20 });
      await page.mouse.up();

      await page.waitForTimeout(1000);

      const updatedChartBox = await chart.boundingBox();
      const centerX = containerBox.x + containerBox.width / 2;
      const centerY = containerBox.y + containerBox.height / 2;

      await page.mouse.move(
        updatedChartBox.x + updatedChartBox.width / 2,
        updatedChartBox.y + updatedChartBox.height / 2,
      );
      await page.mouse.down();
      await page.mouse.move(centerX, centerY, { steps: 15 });
      await page.mouse.up();

      await page.waitForTimeout(1000);
    }
  }

  async dragAndDropToInvalidArtboard() {
  const container = await page.$('[data-testid="Container"]');
  const invalidTarget = await page.$('//button[normalize-space()="Text"]');

  const containerBox = await container.boundingBox();
  const invalidBox = await invalidTarget.boundingBox();

  if (containerBox && invalidBox) {
    await page.mouse.move(
      containerBox.x + containerBox.width / 2,
      containerBox.y + containerBox.height / 2
    );
    await page.mouse.down();

    await page.mouse.move(
      invalidBox.x + invalidBox.width / 2,
      invalidBox.y + invalidBox.height / 2,
      { steps: 20 }
    );

    await page.mouse.up();
    await page.waitForTimeout(1000); 
  } else {
    throw new Error('Container or invalid drop target (Text button) not found');
  }
  

}

async dragAndDropChartOnArtBoard() {
 await page.waitForSelector('[data-testid="Chart"]', { state: 'visible' });
  await page.waitForSelector('div#section1.layout-style', { state: 'visible' });

  const chartElement = await page.$('[data-testid="Chart"]');
  const targetContainer = await page.$('div#section1.layout-style');

  if (!chartElement || !targetContainer) {
    console.error("Required elements not found");
    return;
  }

  await chartElement.scrollIntoViewIfNeeded();
  await targetContainer.scrollIntoViewIfNeeded();

  try {
    await chartElement.dragTo(targetContainer);
    return;
  } catch (e) {
    console.warn("dragTo failed, falling back to manual mouse events");
  }

  const chartBox = await chartElement.boundingBox();
  const containerBox = await targetContainer.boundingBox();

  if (chartBox && containerBox) {
    await page.mouse.move(
      chartBox.x + chartBox.width / 2,
      chartBox.y + chartBox.height / 2,
    );
    await page.mouse.down();

    await page.mouse.move(
      containerBox.x + containerBox.width / 2,
      containerBox.y + containerBox.height / 2,
      { steps: 20 },
    );

    await page.mouse.up();
  } else {
    console.error("Bounding boxes not available");
  }
}

  async verifyErrorMessage(errorMessage) {
        let locator = `//span[text()='${errorMessage}']`;
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
      }

  async assertChartPresentOnArtBoard() {
    const chartOnArtboard = page.locator('div#section1.layout-style element-factory-chart');
    const isVisible = await chartOnArtboard.isVisible();
    expect(isVisible).to.be.true;
}


  async clickLoginButton() {
    await page.click(`//button[contains (., 'Login')]`)
}


}
module.exports = { creatinglyLocators };
