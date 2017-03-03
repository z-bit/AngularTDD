var calculator = {
    multiply: function(v1, v2) {
        return v1 * v2;
    }
};

function multipleTest1() {
    // Test
    var result = calculator.multiply(3, 3);

    // Assert expected result
    if (result === 9) {
        console.log("Test passed");
    } else {
        console.log("Test failed");
    }
}

multipleTest1();