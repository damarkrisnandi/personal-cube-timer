import { useEffect, useState } from "react";
import { RecordData } from "../services/recordData";

function AppTimeList() {
    // const [records, setRecords] = useState((new RecordData()).getRecords());
    useEffect(() => {
        (new RecordData()).listView()
    }, [])
    return ( 
        <div>
        <p className="text-xs text-white" id="timelist"></p>
        <p className="text-xs text-white" id="timelist-ao5"></p>
        <p className="text-xs text-white" id="timelist-ao5-best"></p>
        <button className="text-xs text-white font-semibold" onClick={() => { (new RecordData()).clearAll() }}>clearAll</button>
        </div>
        // <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        //     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        //         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        //             <tr>
        //                 <th scope="col" className="px-6 py-1">
        //                     Time
        //                 </th>
        //                 <th scope="col" className="px-6 py-1">
        //                     Ao5
        //                 </th>
        //                 <th scope="col" className="px-6 py-1">
        //                     Ao12
        //                 </th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             { records.map(record => (
        //                 <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        //                     <td className="px-6 py-1">
        //                         {parseFloat(record.time).toFixed(2)}
        //                     </td>
        //                     <td className="px-6 py-1">
        //                         {record.ao5 ? parseFloat(record.ao5).toFixed(2) : '-'}
        //                     </td>
        //                     <td className="px-6 py-1">
        //                         {record.ao12 ? parseFloat(record.ao12).toFixed(2) : '-'}
        //                     </td>
        //                 </tr>    
        //             ))}
                    
        //         </tbody>
        //     </table>
        // </div>
    );
}

export default AppTimeList;