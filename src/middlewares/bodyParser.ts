import bodyParser from 'body-parser';

export const bodyParserMiddleware = () => {
    return bodyParser.text({ type: 'text/plain' })
}