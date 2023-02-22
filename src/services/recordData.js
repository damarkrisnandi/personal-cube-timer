import { Result } from "../models/result.ts";

export class RecordData {
    dataKey = 'personal-cube-time:record'
    createRecord(result) {
        const records = this.getRecords();
        const record = new Result()
        record.time = result.time;
        record.scramble = result.scramble;
        record.dateRecorded = new Date();
        record.ao5 = this.getAo5();
        record.ao12 = this.getAo12();
        
        this.setRecords(record);
    }

    getRecords() {
        const item  = localStorage.getItem(this.dataKey)
        return item ? JSON.parse(item) : null;
    }

    setRecords(newRecord) {
        let records = this.getRecords();
        records ? records.push(newRecord) : records = [newRecord];
        localStorage.setItem(this.dataKey, JSON.stringify(records))
    }

    getAo5() {
        return this.getAoN(5);
    }

    getAo12() {
        return this.getAoN(12);
    }

    getAoN(dataSlice) {
        const recs = this.getRecords()
        if (recs && recs.length >= dataSlice) {
            const last5 = recs.slice(-1 * dataSlice);
            last5.sort();
            const data = last5.slice(1, dataSlice - 1);
            let total = 0;
            for (let rec of data) {
                total += parseFloat(rec.time);
            }
            return total/(dataSlice - 2)
        }
        return null
    }

    listView() {
        const records = this.getRecords() || [];

        let listView = document.getElementById('timelist')
        listView.innerText = records.map(o => { 
            let result = parseFloat(o.time).toFixed(2);
            if (o.time === Math.min(...records.map(o => o.time))) {
                result = `(${result})`;
            }
            return result
            
        }).slice(-50).join(', ')
    }

    clearAll() {
        localStorage.removeItem(this.dataKey);
        this.listView();
    }
}