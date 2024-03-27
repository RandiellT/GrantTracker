//Taken from Jensen (2018)
//Only a few modications were made for this to function.

//Exporting the approve proposals model

export interface ApproveProposal {
    _id?: string;
    proposalName: string;
    submittedBy: string;
    status: string;
    comments: string;
    submissionDate: string;
}