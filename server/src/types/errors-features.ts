export type ErrorsAndFeaturesType = {
    issueId: string,
    username: string,
    type: "error" | "feature",
    description: string,
    url: string,
    // one parameter to hold a boolean value for admin to mark for reference
    resolved: boolean
}