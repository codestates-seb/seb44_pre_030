export const NumberForMatter = (num) => {
    if(num===null){
        return 'ppp';
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}