function calculateGiftVoucher(bonusPoints) {
     const giftVoucherValue = bonusPoints / 100; 
     return giftVoucherValue; 
    }
    function displayGiftVoucherReward(bonusPoints) { 
        const giftVoucherValue = calculateGiftVoucher(bonusPoints);
         console.log(`Congratulations! You have earned a gift voucher worth ₹${giftVoucherValue}.`); 
        }
        const bonusPoints =prompt("Enter the Bonus points"); 
        displayGiftVoucherReward(bonusPoints);

        