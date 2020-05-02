function Stopwatch(){
    let startTime, endTime, runTime, duration = 0;

    this.start = function(){
        if(running)
        throw new error('Stopwatch has already started.');
        
        runing = true;
        startTime = new Date();
    };
    this.stop = function(){
        if(!running)
        throw new error('Stopwatch is not started.');
        
        runing = false;
        endTime = new Date();

        const seconds = (endTime.getTime()-startTime())/1000;
        duration+=seconds;
    };
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
    Object.defineProperty(this,'duration', {
        get: function() { return duration;}
    });
}
