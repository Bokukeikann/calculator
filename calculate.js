const rates = {
    goods: [
        { min: 0, max: 100, rate: 0.015 },
        { min: 100, max: 500, rate: 0.011 },
        { min: 500, max: 1000, rate: 0.008 },
        { min: 1000, max: 5000, rate: 0.005 },
        { min: 5000, max: 10000, rate: 0.0025 },
        { min: 10000, max: 50000, rate: 0.0005 },
        { min: 50000, max: 100000, rate: 0.00035 },
        { min: 100000, max: 500000, rate: 0.00008 },
        { min: 500000, max: 1000000, rate: 0.00006 },
        { min: 1000000, max: Infinity, rate: 0.00004 }
    ],
    services: [
        { min: 0, max: 100, rate: 0.015 },
        { min: 100, max: 500, rate: 0.008 },
        { min: 500, max: 1000, rate: 0.0045 },
        { min: 1000, max: 5000, rate: 0.0025 },
        { min: 5000, max: 10000, rate: 0.001 },
        { min: 10000, max: 50000, rate: 0.0005 },
        { min: 50000, max: 100000, rate: 0.00035 },
        { min: 100000, max: 500000, rate: 0.00008 },
        { min: 500000, max: 1000000, rate: 0.00006 },
        { min: 1000000, max: Infinity, rate: 0.00004 }
    ],
    engineering: [
        { min: 0, max: 100, rate: 0.01 },
        { min: 100, max: 500, rate: 0.007 },
        { min: 500, max: 1000, rate: 0.0055 },
        { min: 1000, max: 5000, rate: 0.0035 },
        { min: 5000, max: 10000, rate: 0.002 },
        { min: 10000, max: 50000, rate: 0.0005 },
        { min: 50000, max: 100000, rate: 0.00035 },
        { min: 100000, max: 500000, rate: 0.00008 },
        { min: 500000, max: 1000000, rate: 0.00006 },
        { min: 1000000, max: Infinity, rate: 0.00004 }
    ]
};

function calculate() {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const category = document.getElementById('category').value;
    const rateTable = rates[category];
    const processSteps = document.getElementById('processSteps');
    processSteps.innerHTML = ''; // 清空之前的计算过程

    let totalFee = 0;

    for (const range of rateTable) {
        if (amount > range.min) {
            const rangeAmount = Math.min(amount, range.max) - range.min;
            const fee = rangeAmount * range.rate;
            totalFee += fee;

            // 添加计算过程，保留三位小数
            const step = document.createElement('li');
            step.textContent = `区间 ${range.min.toFixed(3)} 万元 - ${range.max.toFixed(3)} 万元: ${rangeAmount.toFixed(3)} 万元 * ${(range.rate * 100).toFixed(3)}% = ${fee.toFixed(3)} 万元`;
            processSteps.appendChild(step);
        }
    }

    // 总费用保留三位小数
    document.getElementById('totalFee').textContent = totalFee.toFixed(3);
}