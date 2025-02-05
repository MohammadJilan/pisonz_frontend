class JsonRowCollector {

    constructor(labellist) {
        this.batch = []
        this.wrapper = []
        this.labellist = labellist;
    }

    result(myjsonlist) {
        let jsonlist = [];
        if (!typeof myjsonlist == "object") {
            jsonlist = JSON.parse(myjsonlist);
        } else {
            jsonlist = myjsonlist;
        }

        for (let i = 0; i < jsonlist.length; i++) {
            for (let labelindex = 0; labelindex < this.labellist.length; labelindex++) {
                this.wrapper.push(jsonlist[i][this.labellist[labelindex]])
            }
            this.batch.push(this.wrapper);
            this.wrapper = [];
        }

        return this.batch;
    }

    merge(jsonlist, mergelist) {
        let finallist = []

        if (jsonlist.length == mergelist.length) {
            for (let i = 0; i < jsonlist.length; i++) {
                let merged = [...jsonlist[i], ...mergelist[i]];
                finallist.push(merged);
            }

            return finallist;
        }else{
            return jsonlist;
        }
    }

}

export default JsonRowCollector;