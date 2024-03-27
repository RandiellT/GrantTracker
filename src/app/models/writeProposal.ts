//Taken from Jensen (2018)
//Only a few modications were made for this to function.

//Exporting the write proposal model

export interface WriteProposal {
    _id?: string;
    grantName: string;
    orgName: string;
    addField: string;
    submissionDate: string;
}