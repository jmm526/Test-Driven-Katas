
function wrap(str, len) {
    if (!str) { return ''; }
    str = str.replace(/\s+/g,' ').trim();
    console.log(str)
    let st_ind = 0;
    let ind = 0;
    let space = 0;
    while (ind < str.length) {
        // console.log(st_ind)
        if(ind - st_ind > len && space !== st_ind) {
            if (str[ind] === ' ') { space = ind; } 
            str = str.slice(0, space) + '\n' + str.slice(space + 1); 
            st_ind = space;
            ind = st_ind;
        }
        if(str[ind] === ' ') { space = ind; }
        ind++;
    }
    // console.log(str)
    return str;
} 



wrap('hello my name is Bob', 10)

module.exports = wrap;
