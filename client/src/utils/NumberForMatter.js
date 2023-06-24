export const NumberForMatter = (num) => {
    console.log(num)
    if(num===0){
        return '0';
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}