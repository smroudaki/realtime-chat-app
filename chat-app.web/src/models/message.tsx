export default interface Message {
    from: string;
    text: string;
    sentAt: string;
    isIncoming: boolean;
}
