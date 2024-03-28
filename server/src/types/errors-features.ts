export type ErrorsAndFeaturesType = {
    username: string,
    type: "error" | "feature",
    description: string,
    url: string,
    issueId: string,
    // one parameter to hold a boolean value for admin to mark for reference
    resolved: boolean
}