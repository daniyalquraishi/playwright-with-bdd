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
    const chartElement = await page.$('[data-testid="Chart"]');
    const targetContainer = await page.$('#Container1');

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
}
module.exports = { creatinglyLocators };
