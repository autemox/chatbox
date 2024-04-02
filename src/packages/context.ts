import { Message } from '../stores/types'

export function context(prompts: Message[]): Message[] {
    // test adding an additional message to make sure the LLM is getting this added context
    const newMessage: Message = {
        id: 'context-message-id',
        role: 'system',
        content: 'It is very important that I remember the pink elephant lives in the blue room!!',
    };
    prompts = [newMessage, ...prompts];

    // test
    prompts = prompts.map((msg) => {
        if (msg.role === 'user') {
            msg.content = `[User]: ${msg.content}`;
        } else if (msg.role === 'assistant') {
            msg.content = `[Assistant]: ${msg.content}  Or at least, in the bedroom.`;
        }
        return msg;
    });

    return prompts;
}