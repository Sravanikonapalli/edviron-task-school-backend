const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }));


app.get('/api/transactions', (req, res) => {
  res.json({ 
    
        "transactions": [
            {
                "_id": "6730d9b926c65c39b0ee0149",
                "school_id": "67308b27e9bbcdf5f22d24c1",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test1",
                "collect_id": "6730d9b926c65c39b0ee0149"
            },
            {
                "_id": "6730d9b926c65c39b0ee014a",
                "school_id": "67308b27e9bbcdf5f22d24c2",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test2",
                "collect_id": "6730d9b926c65c39b0ee014a"
            },
            {
                "_id": "6730d9b926c65c39b0ee014b",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "CASHFREE",
                "order_amount": 22000,
                "custom_order_id": "test3",
                "collect_id": "6730d9b926c65c39b0ee014b"
            },
            {
                "_id": "6730d9b926c65c39b0ee014c",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "PHONEPE",
                "order_amount": 20000,
                "custom_order_id": "test4",
                "collect_id": "6730d9b926c65c39b0ee014c"
            },
            {
                "_id": "6730d9b926c65c39b0ee014d",
                "school_id": "67308b27e9bbcdf5f22d24c4",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test5",
                "collect_id": "6730d9b926c65c39b0ee014d"
            },
            {
                "_id": "6730d9b926c65c39b0ee014e",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "PHONEPE",
                "order_amount": 10000,
                "custom_order_id": "test6",
                "collect_id": "6730d9b926c65c39b0ee014e"
            },
            {
                "_id": "6730d9b926c65c39b0ee014f",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test7",
                "collect_id": "6730d9b926c65c39b0ee014f"
            },
            {
                "_id": "6730d9b926c65c39b0ee0150",
                "school_id": "67308b27e9bbcdf5f22d24c8",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test8",
                "collect_id": "6730d9b926c65c39b0ee0150"
            },
            {
                "_id": "6730d9b926c65c39b0ee0151",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test9",
                "collect_id": "6730d9b926c65c39b0ee0151"
            },
            {
                "_id": "6730d9b926c65c39b0ee0152",
                "school_id": "67308b27e9bbcdf5f22d24c10",
                "gateway": "PHONEPE",
                "order_amount": 14000,
                "custom_order_id": "test10",
                "collect_id": "6730d9b926c65c39b0ee0152"
            },
            {
                "_id": "6730d9b926c65c39b0ee0153",
                "school_id": "67308b27e9bbcdf5f22d24c11",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test11",
                "collect_id": "6730d9b926c65c39b0ee0153"
            },
            {
                "_id": "6730d9b926c65c39b0ee0154",
                "school_id": "67308b27e9bbcdf5f22d24c12",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test12",
                "collect_id": "6730d9b926c65c39b0ee0154"
            },
            {
                "_id": "6730d9b926c65c39b0ee0155",
                "school_id": "67308b27e9bbcdf5f22d24c13",
                "gateway": "PHONEPE",
                "order_amount": 10000,
                "custom_order_id": "test13",
                "collect_id": "6730d9b926c65c39b0ee0155"
            },
            {
                "_id": "6730d9b926c65c39b0ee0156",
                "school_id": "67308b27e9bbcdf5f22d24c14",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test14",
                "collect_id": "6730d9b926c65c39b0ee0156"
            },
            {
                "_id": "6730d9b926c65c39b0ee0157",
                "school_id": "67308b27e9bbcdf5f22d24c15",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test15",
                "collect_id": "6730d9b926c65c39b0ee0157"
            },
            {
                "_id": "6730d9b926c65c39b0ee0158",
                "school_id": "67308b27e9bbcdf5f22d24c4",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test16",
                "collect_id": "6730d9b926c65c39b0ee0158"
            },
            {
                "_id": "6730d9b926c65c39b0ee0159",
                "school_id": "67308b27e9bbcdf5f22d24c17",
                "gateway": "PHONEPE",
                "order_amount": 12000,
                "custom_order_id": "test17",
                "collect_id": "6730d9b926c65c39b0ee0159"
            },
            {
                "_id": "6730d9b926c65c39b0ee015a",
                "school_id": "67308b27e9bbcdf5f22d24c18",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test18",
                "collect_id": "6730d9b926c65c39b0ee015a"
            },
            {
                "_id": "6730d9b926c65c39b0ee015b",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test19",
                "collect_id": "6730d9b926c65c39b0ee015b"
            },
            {
                "_id": "6730d9b926c65c39b0ee015c",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "PHONEPE",
                "order_amount": 10000,
                "custom_order_id": "test20",
                "collect_id": "6730d9b926c65c39b0ee015c"
            },
            {
                "_id": "6730d9b926c65c39b0ee015d",
                "school_id": "67308b27e9bbcdf5f22d24c21",
                "gateway": "CASHFREE",
                "order_amount": 19000,
                "custom_order_id": "test21",
                "collect_id": "6730d9b926c65c39b0ee015d"
            },
            {
                "_id": "6730d9b926c65c39b0ee015e",
                "school_id": "67308b27e9bbcdf5f22d24c22",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test22",
                "collect_id": "6730d9b926c65c39b0ee015e"
            },
            {
                "_id": "6730d9b926c65c39b0ee015f",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test23",
                "collect_id": "6730d9b926c65c39b0ee015f"
            },
            {
                "_id": "6730d9b926c65c39b0ee0160",
                "school_id": "67308b27e9bbcdf5f22d24c24",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test24",
                "collect_id": "6730d9b926c65c39b0ee0160"
            },
            {
                "_id": "6730d9b926c65c39b0ee0161",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "PHONEPE",
                "order_amount": 10000,
                "custom_order_id": "test25",
                "collect_id": "6730d9b926c65c39b0ee0161"
            },
            {
                "_id": "6730d9b926c65c39b0ee0162",
                "school_id": "67308b27e9bbcdf5f22d24c26",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test26",
                "collect_id": "6730d9b926c65c39b0ee0162"
            },
            {
                "_id": "6730d9b926c65c39b0ee0163",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test27",
                "collect_id": "6730d9b926c65c39b0ee0163"
            },
            {
                "_id": "6730d9b926c65c39b0ee0164",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test28",
                "collect_id": "6730d9b926c65c39b0ee0164"
            },
            {
                "_id": "6730d9b926c65c39b0ee0165",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "CASHFREE",
                "order_amount": 76540,
                "custom_order_id": "test29",
                "collect_id": "6730d9b926c65c39b0ee0165"
            },
            {
                "_id": "6730d9b926c65c39b0ee0166",
                "school_id": "67308b27e9bbcdf5f22d24c30",
                "gateway": "PHONEPE",
                "order_amount": 10000,
                "custom_order_id": "test30",
                "collect_id": "6730d9b926c65c39b0ee0166"
            },
            {
                "_id": "6730d9b926c65c39b0ee0167",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test31",
                "collect_id": "6730d9b926c65c39b0ee0167"
            },
            {
                "_id": "6730d9b926c65c39b0ee0168",
                "school_id": "67308b27e9bbcdf5f22d24c32",
                "gateway": "PHONEPE",
                "order_amount": 99000,
                "custom_order_id": "test32",
                "collect_id": "6730d9b926c65c39b0ee0168"
            },
            {
                "_id": "6730d9b926c65c39b0ee0169",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test33",
                "collect_id": "6730d9b926c65c39b0ee0169"
            },
            {
                "_id": "6730d9b926c65c39b0ee016a",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test34",
                "collect_id": "6730d9b926c65c39b0ee016a"
            },
            {
                "_id": "6730d9b926c65c39b0ee016b",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test35",
                "collect_id": "6730d9b926c65c39b0ee016b"
            },
            {
                "_id": "6730d9b926c65c39b0ee016c",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "PHONEPE",
                "order_amount": 10000,
                "custom_order_id": "test36",
                "collect_id": "6730d9b926c65c39b0ee016c"
            },
            {
                "_id": "6730d9b926c65c39b0ee016d",
                "school_id": "67308b27e9bbcdf5f22d24c37",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test37",
                "collect_id": "6730d9b926c65c39b0ee016d"
            },
            {
                "_id": "6730d9b926c65c39b0ee016e",
                "school_id": "67308b27e9bbcdf5f22d24c38",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test38",
                "collect_id": "6730d9b926c65c39b0ee016e"
            },
            {
                "_id": "6730d9b926c65c39b0ee016f",
                "school_id": "67308b27e9bbcdf5f22d24c39",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test39",
                "collect_id": "6730d9b926c65c39b0ee016f"
            },
            {
                "_id": "6730d9b926c65c39b0ee0170",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "CASHFREE",
                "order_amount": 87000,
                "custom_order_id": "test40",
                "collect_id": "6730d9b926c65c39b0ee0170"
            },
            {
                "_id": "6730d9b926c65c39b0ee0171",
                "school_id": "67308b27e9bbcdf5f22d24c23",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test41",
                "collect_id": "6730d9b926c65c39b0ee0171"
            },
            {
                "_id": "6730d9b926c65c39b0ee0172",
                "school_id": "67308b27e9bbcdf5f22d24c42",
                "gateway": "PHONEPE",
                "order_amount": 10000,
                "custom_order_id": "test42",
                "collect_id": "6730d9b926c65c39b0ee0172"
            },
            {
                "_id": "6730d9b926c65c39b0ee0173",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "CASHFREE",
                "order_amount": 88000,
                "custom_order_id": "test43",
                "collect_id": "6730d9b926c65c39b0ee0173"
            },
            {
                "_id": "6730d9b926c65c39b0ee0174",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "PHONEPE",
                "order_amount": 10000,
                "custom_order_id": "test44",
                "collect_id": "6730d9b926c65c39b0ee0174"
            },
            {
                "_id": "6730d9b926c65c39b0ee0175",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test45",
                "collect_id": "6730d9b926c65c39b0ee0175"
            },
            {
                "_id": "6730d9b926c65c39b0ee0176",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "PHONEPE",
                "order_amount": 19000,
                "custom_order_id": "test46",
                "collect_id": "6730d9b926c65c39b0ee0176"
            },
            {
                "_id": "6730d9b926c65c39b0ee0177",
                "school_id": "67308b27e9bbcdf5f22d24c47",
                "gateway": "CASHFREE",
                "order_amount": 10000,
                "custom_order_id": "test47",
                "collect_id": "6730d9b926c65c39b0ee0177"
            },
            {
                "_id": "6730d9b926c65c39b0ee0178",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "PHONEPE",
                "order_amount": 67000,
                "custom_order_id": "test48",
                "collect_id": "6730d9b926c65c39b0ee0178"
            },
            {
                "_id": "6730d9b926c65c39b0ee0179",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "PHONEPE",
                "order_amount": 10000,
                "custom_order_id": "test49",
                "collect_id": "6730d9b926c65c39b0ee0179"
            },
            {
                "_id": "6730d9b926c65c39b0ee017a",
                "school_id": "67308b27e9bbcdf5f22d24c19",
                "gateway": "PHONEPE",
                "order_amount": 23000,
                "custom_order_id": "test50",
                "collect_id": "6730d9b926c65c39b0ee017a"
            }
        ]
    }
  ); 
});

app.listen(3000, () => {
  console.log('Backend server is running on port 3000');
});
