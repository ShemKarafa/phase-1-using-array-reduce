const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total,batteryBatch) => total + batteryBatch,0);

console.log(totalBatteries); // Output is 31
// Code your solution here
