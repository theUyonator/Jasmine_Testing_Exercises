describe('This is to test the helper functions (with start up and tear down', function(){

    beforeEach( function () {

        billAmtInput.value = "100";
        tipAmtInput.value = "10";
        submitPaymentInfo();
    })

    it('Should calculate the correct tip percentage on calculateTipPercent()', function(){

        let billAmt = 100;
        let tipAmt = 10;

        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(10);
    })

    it('Should be able to create new Td on appendTd()', function() {

        let newTr = document.createElement('tr');

         appendTd(newTr, '100');

        expect(newTr.firstChild.innerHTML).toEqual('100');
    })

    it('Should be able to calculate the total payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        billAmtInput.value = "200";
        tipAmtInput.value = "20";

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
        expect(sumPaymentTotal('tipAmt')).toEqual(30);

    })

    it('Should be able to create a delete button on appendDeleteBtn()', function () {

        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.firstChild.innerText).toEqual("X");
    })




afterEach(function(){

    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
})




})