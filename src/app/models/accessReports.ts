//Taken from Jensen (2018)
//Only a few modications were made for this to function.

//Exporting the access reports model

export interface AccessReports {
    _id?: string;
    submittedReport: Object;
    reportName: string;
    submittedBy: string;
    comments: string;
    status: string;
    submissionDate: string;
}