
// إضافة حدث عند النقر على زر الدفع
document.getElementById('pay-button').addEventListener('click', function(event) {
 event.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على الزر

 // جمع البيانات من المدخلات
 const amount = parseFloat(document.getElementById('amount').value);
 const memo = document.getElementById('memo').value;

 // التحقق من صحة المبلغ المدخل
 if (isNaN(amount) || amount <= ount) || amount <= 0) {
 document.getElementById('response').innerText = 'يرجى إدخال مبلغ صالح.';
 return;
 }

 // بيانات الدفع
 const paymentData = {
 amount: amount,
 memo: memo,
 metadata: { InternalPaymentID: 1234 }, // يمكن استخدام معرف داخلي لتتبع الدفع
 };

 // تعريف ردود الفعل على الأحداث المختلفة
 const paymentCallbacks = {
 onReadyForServerApproval: function(paymentId) {
 console.log(`Ready for server approval: ${paymentId}`);
 },
 onReadyForServerCompletion: function(paymentId, txid) {
 console.log(`Payment completed: ${paymentId}, Transaction ID: ${txid}`);
 document.getElementById('response').innerText = 'تم الدفع بنجاح!';
 },
 onCancel: function(paymentId) {
 console.log(`Payment canceled: ${paymentId}`);
 document.getElementById('response').innerText = 'تم إلغاء الدفع.';
 },
 onError: function(error, payment) {
 console.error(`Error occurred: ${error}`, payment);
 document.getElementById('response').innerText = 'حدث خطأ أثناء الدفع!';
 }
 };

 // استدعاء دالة إنشاء الدفع (تأكد من أن لديك مكتبة Pi SDK متاحة)
 Pi.createPayment(paymentData, paymentCallbacks).then(function(payment) {
 console.log('Payment created successfully:', payment);
 }).catch(function(error) {
 console.error('Error creating payment:', error);
 ent(paymentData, paymentCallbacks).then(function(payment) {
 console.log('Payment created successfully:', payment);
 }).catch(function(error) {
 console.error('Error creating