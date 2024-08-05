(async () => {
    const { expect } = await import('chai');

    describe('Sample Test', () => {
        it('should return true', () => {
            expect(true).to.be.true;
        });
    });
})();
