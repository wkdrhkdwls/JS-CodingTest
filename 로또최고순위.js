const solution = (lottos, win_nums)=>{
    const min = lottos.filter((numbers)=>win_nums.includes(numbers)).length;
    const max = min + lottos.filter(numbers => lottos === 0).length;

    const result = (numbers)=>{
        switch(numbers){
            case 2:
                return 5;
            case 3:
                return 4;
            case 4:
                return 3;
            case 5:
                return 2;
            case 6:
                return 1;
            defalut:
                return 6;
        }
    };
    return [result(max),result(min)];
};