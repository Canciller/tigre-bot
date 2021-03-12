function timeout(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class MessageService {
  async send(text: string) {
    await timeout(2000);

    return {
      text: 'RESPONSE',
      direction: 'LEFT',
    };
  }
}

export default new MessageService();
