class PickManager{
    // Made for the purpose of recognizing which element is selected from a frontend grid.
    constructor(list){
        this.list = list;
    }

    result(name, index){
        const value = this.list[index];
        sessionStorage.setItem(name, value);
        return;
    }



}

export default PickManager;