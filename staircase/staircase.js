


function staircase(n) {
    step(1, n);
}
const step = (count, n) => {
    let steps = "";
    let i = 0;
    while( i < n ) {
        if(i < n- count) steps += " ";
        else {
            steps+= "#";
        }
        i ++
    }
    console.log(steps);
    if(count < n) {
        return step(count+1,n);
    }
}
staircase(1)
staircase(2)
staircase(3)
staircase(4)