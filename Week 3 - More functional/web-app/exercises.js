function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

function lucas(n) {
    if (n === 0) return 2;
    if (n === 1) return 1;
    return (lucas(n - 1) + lucas(n - 2));
 };

function fibonacci_like (n,a,b){
    if (n===0){
        return a;
    } else {
        return fibonacci_like(n-1, b , a + b);
    }
};

