function formatTime(date) {
    const timeFormat = `${date.toLocaleTimeString('hu', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
    return timeFormat;
}

const sampleDate = new Date(Date.now());
console.log(formatTime(sampleDate));

let clockElement = document.querySelector('.clock__element');
clockElement.innerText = formatTime(sampleDate);