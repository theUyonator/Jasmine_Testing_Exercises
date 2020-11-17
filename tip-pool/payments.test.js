describe("Payments Test with set up and tear down", function (){

    beforeEach(function(){
        // initialization logic
        billAmtInput.value = "100";
        tipAmtInput.value = '10';
    })

    it('Should add a new payment to allPayments on submitPaymentInfo()', function (){

        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(10);
    })



    it('Should create current payment on createCurPayment()', function () {
        let expectedPayment = {
            billAmt: "100",
            tipAmt: "10",
            tipPercent: 10
        }

        expect(createCurPayment()).toEqual(expectedPayment);
    })

    it('Should not add a new bill payment to allPayments on submitPaymentInfo() when billAmt || tipAmt is empty ', function () {

        billAmtInput.value = "";
        tipAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it('Should not create new payment on createCurPayment() if no bill amt was entered', function () {

       billAmtInput.value = '';
       tipAmtInput.value = '';

       expect(createCurPayment()).toBe(undefined);

        expect()
    })

    it('Should add payment table on appendPaymentTable()', function(){

        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curPaymentTdList = document.querySelectorAll('#paymentTable Tbody tr td');
        expect(curPaymentTdList.length).toEqual(4);
        expect(curPaymentTdList[0].innerText).toEqual('$100');
        expect(curPaymentTdList[1].innerText).toEqual('$10');
        expect(curPaymentTdList[2].innerText).toEqual('10%');
        expect(curPaymentTdList[3].innerText).toEqual("X");
    })

    afterEach(function(){

        billAmtInput.value = "";
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })
})