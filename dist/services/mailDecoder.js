"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailDecoder = void 0;
class MailDecoder {
    static decode(rawData) {
        const cardPaymentRegex = /Transakcja kartą/;
        const transferRegex = /Obciążenie konta/;
        const cardPaymentMatch = rawData.match(cardPaymentRegex);
        const transferMatch = rawData.match(transferRegex);
        switch (true) {
            case cardPaymentMatch !== null:
                return this.decodeCardPaymentData(rawData);
            case transferMatch !== null:
                return this.decodeTransferData(rawData);
            default:
                return null;
        }
    }
    static decodeCardPaymentData(rawData) {
        const amountMatch = rawData.match(/Kwota:\s([\d,]+)\sPLN/);
        const dateMatch = rawData.match(/Data transakcji:\s([\d-]+\s[\d:]+)/);
        const placeMatch = rawData.match(/Miejsce:\s(.+)/);
        if (!amountMatch || !dateMatch || !placeMatch) {
            throw new Error("Invalid email content");
        }
        const amount = parseFloat(amountMatch[1].replace(",", "."));
        const date = dateMatch[1].split(" ")[0];
        const place = placeMatch[1];
        return {
            amount,
            date,
            place,
        };
    }
    static decodeTransferData(rawData) {
        const amountMatch = rawData.match(/obciążone kwotą\s-([\d,]+)\sPLN/);
        const dateMatch = rawData.match(/Data waluty:\s([\d-]+)/);
        const titleMatch = rawData.match(/tytuł:\s(.+)/);
        if (!amountMatch || !dateMatch || !titleMatch) {
            throw new Error("Invalid email content");
        }
        const amount = parseFloat(amountMatch[1].replace(",", "."));
        const date = dateMatch[1];
        const title = titleMatch[1];
        return {
            amount,
            date,
            title,
        };
    }
}
exports.MailDecoder = MailDecoder;
