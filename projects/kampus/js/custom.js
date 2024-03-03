// program - overeni datumu a stitek dnes
function hideSecondDateIfSame(fromDateId, toDateId, dataId) {
    var fromDateElement = document.getElementById(fromDateId);
    var toDateElement = document.getElementById(toDateId);
    var dateToFigureElement = findFigureElementByDataId(dataId);

    if (fromDateElement && toDateElement && dateToFigureElement) {
        var fromDate = new Date(fromDateElement.textContent.trim());
        var toDate = new Date(toDateElement.textContent.trim());

        if (fromDate.toDateString() === toDate.toDateString()) {
            dateToFigureElement.style.display = 'none';
        }
    }
}

function showTodayTag(fromDateString, toDateString, todayTagSelector) {
    var todayTagElement = document.querySelector(todayTagSelector);

    if (todayTagElement) {
        var fromDate = new Date(fromDateString);
        var toDate = new Date(toDateString);
        var today = new Date();

        if (today >= fromDate && today <= toDate) {
            todayTagElement.classList.remove('invisible');
        }
    }
}

function findFigureElementByDataId(dataId) {
    var figureElements = document.querySelectorAll('.w-layout-hflex.event-date-row.date-to');
    for (var i = 0; i < figureElements.length; i++) {
        if (figureElements[i].getAttribute('data-id') === dataId) {
            return figureElements[i];
        }
    }
    return null;
}