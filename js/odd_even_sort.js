'strict'

class OddEvenSort extends SortingBase{
    constructor(){
        super();
    }
     
    splitTime = 1000;

    setSplitTime(mspf){
        if(mspf <3){
            this.splitTime = 1;
            return;
        }
        this.splitTime = mspf /3;
    }

    static async run(one, sleep, endingPose){
        let temp;
        let isAllSorted;
        one.setSplitTime(one.milliSecPerFrame)

        isAllSorted = 0;

        while(1){
            for(let i=0 ; i<one.entryNum ; i=i+2){

                if( (i+1) < one.entryNum){

                    one.compareColoring(one.blockBox[i] , one.blockBox[i+1]);
                    one.fillStageWithBlocks();
                    await sleep(one.splitTime);

                    if(one.blockBox[i].value > one.blockBox[i+1].value){
                        temp = one.blockBox[i];
                        one.blockBox[i] = one.blockBox[i+1];
                        one.blockBox[i+1] = temp;
                        isAllSorted++;
                    }

                    one.checkCompareColoring(one.blockBox[i] , one.blockBox[i+1]);
                    one.fillStageWithBlocks();
                    await sleep(one.splitTime);

                    one.doneCompareColoring(one.blockBox[i] , one.blockBox[i+1]);
                    one.fillStageWithBlocks();
                    await sleep(one.splitTime);

                }
            }; 
            if(!isAllSorted){break;}
            isAllSorted = 0;
            for(let i=1 ; i<one.entryNum ; i=i+2){
                if( (i+1) < one.entryNum){

                    one.compareColoring(one.blockBox[i] , one.blockBox[i+1]);
                    one.fillStageWithBlocks();
                    await sleep(one.splitTime);

                    if(one.blockBox[i].value > one.blockBox[i+1].value){
                        temp = one.blockBox[i];
                        one.blockBox[i] = one.blockBox[i+1];
                        one.blockBox[i+1] = temp;
                        isAllSorted++;
                    }

                    one.checkCompareColoring(one.blockBox[i] , one.blockBox[i+1]);
                    one.fillStageWithBlocks();
                    await sleep(one.splitTime);

                    one.doneCompareColoring(one.blockBox[i] , one.blockBox[i+1]);
                    one.fillStageWithBlocks();
                    await sleep(one.splitTime);
                }
            };
            if(!isAllSorted){break;}
            isAllSorted = 0;
        }

        endingPose(one, sleep)
        
        console.log('done')
    }

}