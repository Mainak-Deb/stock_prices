const price = {
  google: [
    2350.12, 2325.45, 2345.67, 2378.9, 2365.34, 2389.56, 2367.89, 2390.23,
    2376.78, 2356.45, 2398.9, 2345.67, 2389.01, 2356.78, 2378.9, 2367.89,
    2390.56, 2356.78, 2389.12, 2345.67, 2390.56, 2365.34, 2389.01, 2350.12,
    2376.78, 2367.89, 2356.45, 2389.01, 2398.9, 2378.9, 2365.34, 2390.23,
    2350.12, 2367.89, 2345.67, 2376.78, 2389.56, 2398.9, 2345.67, 2356.45,
    2389.12, 2390.23, 2350.12, 2365.34, 2378.9, 2390.56, 2378.9, 2367.89,
    2389.12, 2356.45,
  ],
  amazon: [
    3125.67, 3120.34, 3127.12, 3122.56, 3129.01, 3128.9, 3123.45, 3126.78,
    3125.23, 3124.56, 3127.89, 3126.34, 3129.67, 3128.23, 3125.67, 3120.34,
    3127.12, 3122.56, 3129.01, 3128.9, 3123.45, 3126.78, 3125.23, 3124.56,
    3127.89, 3126.34, 3129.67, 3128.23, 3125.67, 3120.34, 3127.12, 3122.56,
    3129.01, 3128.9, 3123.45, 3126.78, 3125.23, 3124.56, 3127.89, 3126.34,
    3129.67, 3128.23, 3125.67, 3120.34, 3127.12, 3122.56, 3129.01, 3128.9,
    3123.45, 3126.78,
  ],
  microsoft: [
    216.78, 219.45, 217.89, 218.67, 220.34, 217.12, 218.9, 219.56, 217.34,
    219.01, 217.45, 218.23, 220.67, 217.78, 218.9, 216.78, 219.45, 217.12,
    218.67, 219.01, 217.89, 220.34, 218.9, 219.56, 217.78, 216.78, 218.23,
    220.67, 219.45, 218.23, 217.89, 219.01, 218.9, 217.12, 218.67, 219.56,
    217.34, 218.23, 219.45, 216.78, 217.89, 220.34, 218.9, 217.34, 219.01,
    218.67, 219.56, 217.78, 218.23, 220.67,
  ],
  netflix: [
    556.78, 555.12, 554.34, 557.89, 555.67, 558.01, 556.45, 554.23, 557.12,
    555.56, 554.78, 557.23, 556.78, 555.12, 554.34, 557.89, 555.67, 558.01,
    556.45, 554.23, 557.12, 555.56, 554.78, 557.23, 556.78, 558.01, 555.67,
    556.45, 557.12, 555.12, 554.34, 557.89, 556.78, 555.56, 554.78, 558.01,
    555.67, 556.45, 557.12, 555.12, 554.34, 557.89, 556.78, 555.56, 554.78,
    557.23, 556.45, 558.01, 555.67, 556.78,
  ],
  meta: [
    318.9, 316.67, 319.56, 317.12, 320.34, 318.23, 316.78, 319.01, 317.89,
    320.45, 318.23, 317.12, 320.67, 316.67, 319.01, 318.9, 316.78, 317.89,
    320.45, 318.23, 317.12, 319.56, 317.12, 319.56, 318.9, 320.34, 316.67,
    318.23, 320.67, 317.89, 319.01, 318.9, 320.34, 316.78, 317.89, 320.45,
    317.12, 318.9, 320.34, 316.67, 318.23, 319.56, 317.12, 318.9, 320.67,
    319.01, 316.78, 317.89, 320.45, 318.23,
  ],
  adobe: [
    506.78, 503.45, 505.23, 508.9, 507.12, 504.56, 506.34, 508.01, 507.89,
    505.67, 506.45, 503.9, 508.23, 505.67, 504.56, 506.78, 508.9, 503.45,
    505.23, 507.12, 504.56, 508.01, 506.34, 503.9, 507.89, 505.67, 504.56,
    506.45, 508.23, 506.78, 507.12, 505.23, 508.01, 506.34, 503.9, 504.56,
    506.78, 507.89, 505.67, 508.9, 503.45, 507.12, 504.56, 505.23, 508.01,
    506.34, 507.89, 506.45, 503.9, 508.23,
  ],
};


const dates = [
  "2016-01-01",
  "2016-01-02",
  "2016-01-03",
  "2016-01-04",
  "2016-01-05",
  "2016-01-06",
  "2016-01-07",
  "2016-01-08",
  "2016-01-09",
  "2016-01-10",
  "2016-01-11",
  "2016-01-12",
  "2016-01-13",
  "2016-01-14",
  "2016-01-15",
  "2016-01-16",
  "2016-01-17",
  "2016-01-18",
  "2016-01-19",
  "2016-01-20",
  "2016-01-21",
  "2016-01-22",
  "2016-01-23",
  "2016-01-24",
  "2016-01-25",
  "2016-01-26",
  "2016-01-27",
  "2016-01-28",
  "2016-01-29",
  "2016-01-30"
];


const startDate = new Date('2016-01-30');
const datesArray = [];

for (let i = 1; i <= 20; i++) {
  const currentDate = new Date(startDate);
  currentDate.setDate(startDate.getDate() + i);
  datesArray.push(currentDate.toISOString().split('T')[0]);
}

console.log(datesArray);
const ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
      label: 'Stock Price',
      data: price["google"].slice(0, 31),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Stock Price'
        }
      }
    }
  }
});


document.getElementById('companyDropdown').addEventListener('change', function () {
  const selectedCompany = this.options[this.selectedIndex].text;
  const selectedDict = this.options[this.selectedIndex].value;
  document.getElementById('compname').innerText = selectedCompany;

  console.log(selectedDict)


  myChart.destroy()
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Stock Price',
        data: price[selectedDict].slice(0, 31),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Stock Price'
          }
        }
      }
    }
  });
});





let valueElement = document.getElementById('value');
let value = 0;

function increment() {
  if (value < 20) {
    value++;
    updateValue();
  }
}

function decrement() {
  if (value > 0) {
    value--;
    updateValue();
  }
}

function updateValue() {
  valueElement.textContent = value;
}



const slider = document.getElementById('neomorphicSlider');
const sliderValueDisplay = document.getElementById('sliderValue');

slider.addEventListener('input', function () {
  var date = new Date("2016-01-30"); // Create a new Date object with the initial date
  date.setDate(date.getDate() + parseInt(this.value)); // Add 10 days to the date

  console.log(this.value);
  sliderValueDisplay.textContent = date.toISOString().slice(0, 10)
});



function giveAns() {
  document.getElementById("ansbox").innerHTML = "Loading..."
  setTimeout(function () {
    console.log("3 seconds have passed!");
    const selectedDict = document.getElementById('companyDropdown').value;
    const v = parseInt(document.getElementById('neomorphicSlider').value);
    var r= Math.random() * 2 - 1;
    document.getElementById("ansbox").innerHTML = (parseInt(price[selectedDict][30+v])*(100+r)/100).toFixed(2)
  }, 3000);
  
}