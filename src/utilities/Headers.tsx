const BATCH_HEADERS =
    [{
        label: "Source",
        column_name: "type",
        filter: false,
        order: true
    }, {
        label: "Period",
        column_name: "month",
        filter: false,
        order: false
    }, {
        label: "Status",
        column_name: "status",
        filter: false,
        order: false
    }, {
        label: "",
        column_name: "button",
        filter: false,
        order: false
    }, {
        label: "",
        column_name: "button",
        filter: false,
        order: false
    }];

const UPLOAD_HEADERS =
    [{
        label: "File Name ",
        column_name: "fileName",
        filter: false,
        order: true
    }, {
        label: "Step",
        column_name: "step",
        filter: false,
        order: true
    }, {
        label: "Status",
        column_name: "status",
        filter: false,
        order: false
    }];

const DASHBOARD_HEADERS =
    [{
        label: "BatchID",
        column_name: "BatchID",
        filter: false,
        order: true
    }, {
        label: "Batch Type",
        column_name: "Batch Type",
        filter: false,
        order: true
    }, {
        label: "Period",
        column_name: "Period",
        filter: false,
        order: false
    }, {
        label: "Year",
        column_name: "Year",
        filter: false,
        order: false
    }, {
        label: "Status",
        column_name: "status",
        filter: false,
        order: false
    }
    ];

const SURVEY_UPLOAD_HISTORY =
    [{
        label: "Import Date",
        column_name: "Date",
        filter: false,
        order: true
    }, {
        label: "Status",
        column_name: "Status",
        filter: false,
        order: true
    }
    ];

const VARIABLE_DEFINITION_HEADERS =
    [{
        label: "ID",
        column_name: "ID",
        filter: false,
        order: false
    }, {
        label: "Variable",
        column_name: "Variable",
        filter: false,
        order: false
    }, {
        label: "Description",
        column_name: "Description",
        filter: false,
        order: false
    }, {
        label: "Type",
        column_name: "Type",
        filter: false,
        order: false
    }, {
        label: "Valid From",
        column_name: "Valid From",
        filter: false,
        order: false
    }, {
        label: "Length",
        column_name: "Length",
        filter: false,
        order: false
    }, {
        label: "Precision",
        column_name: "Precision",
        filter: false,
        order: false
    }, {
        label: "Alias",
        column_name: "Alias",
        filter: false,
        order: false
    }, {
        label: "Editable",
        column_name: "Editable",
        filter: false,
        order: false
    }, {
        label: "Imputation",
        column_name: "Imputation",
        filter: false,
        order: false
    }, {
        label: "DV",
        column_name: "DV",
        filter: false,
        order: false
    }
    ];

function userHeaders() {
    return (
        [{
            label: "User_ID",
            column_name: "user_id",
            filter: false,
            order: true,
            create: false,
        }, {
            label: "Username",
            column_name: "username",
            filter: false,
            order: true,
            create: true
        }, {
            label: "Password",
            column_name: "password",
            filter: false,
            order: false,
            create: true
        }, {
            label: "Role",
            column_name: "role",
            filter: false,
            order: false,
            create: true
        }]
    )
}

function roleHeaders() {
    return (
        [{
            label: "Role Name",
            column_name: "Name",
            filter: false,
            order: true
        }, {
            label: "Page Access",
            column_name: "Pages",
            filter: false,
            order: false
        }]
    )
}

export {BATCH_HEADERS, SURVEY_UPLOAD_HISTORY, UPLOAD_HEADERS, userHeaders, roleHeaders,
    DASHBOARD_HEADERS, VARIABLE_DEFINITION_HEADERS}