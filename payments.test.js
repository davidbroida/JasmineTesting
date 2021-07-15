describe("Payments test with setup and tear-down", function(){
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });

    it('should return undefined with negative or empty inputs on submitPaymentInfo()', function(){
        billAmtInput.value ='';
        submitPaymentInfo();
        
        expect(Object.keys(allPayments).length).toEqual(0);
    });


    it('should create a new payment on createCurPayment', function(){
        let expectedPayment = {
            billAmt: '100',
            tipAmt: '10',
            tipPercent: 10,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should add current payment to allPayments on submitPaymentInfo()', function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(10);
    });


    it('should update #paymentTable on appendPaymentTable()', function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$10');
        expect(curTdList[2].innerText).toEqual('10%');
    });

    
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })
    

});
    
   



//     it("should return a result with 2 decimal places", function() {
//         // ..
//         const values = {
//           amount: 10000,
//           years: 10,
//           rate: 9.791
//         };
//         expect(calculateMonthlyPayment(values)).toEqual('131.00');
//       });


//   });