const cube = (height) => {
    // in this case width and length are static.
    let walls = height * 1 * 4;
    let base_and_roof = 1 * 1 * 2;
    return walls + base_and_roof;
}
let total_surface_area = 0;
let arr = [
    [1, 3, 4],
    [2, 2, 3],
    [1, 2, 4,]
];

for (let i = 0; i < arr.length; i++ ) {
    for(let j = 0; j < arr[i].length; j++ ) {
        if( i < arr.length-1 ){
            if(arr[i][j] <= arr[i+1][j]) {
                total_surface_area = total_surface_area - arr[i][j] * 2;
            }
            if(arr[i][j] > arr[i+1][j]) {
                total_surface_area = total_surface_area - arr[i+1][j] * 2;
            }
        }
        if(j < arr[i].length-1) {
            if(arr[i][j] <= arr[i][j+1]) {
                total_surface_area = total_surface_area - arr[i][j] * 2;
            }
            if(arr[i][j] > arr[i][j+1]) {
                total_surface_area = total_surface_area - arr[i][j+1] * 2;
            }
        }
        total_surface_area = total_surface_area + cube(arr[i][j]);
    }

}
console.log(total_surface_area);