window.showModal = () => {
    $('#exampleModal').modal('show');
    $('#exampleModal').on('hide.bs.modal', onModalHide);
};

window.hideModal = () => {
    $('#exampleModal').modal('hide');
};

window.onModalHide = () => {
    DotNet.invokeMethodAsync('PartnerProducts.Client', 'InvokeShowPreviewChanged');
};

window.clipboardCopy = {
    copyText: function (text) {
        navigator.clipboard.writeText(text).then(function () {
            /*alert("Copied to clipboard!");*/
        })
            .catch(function (error) {
                alert(error);
            });
    }
};

window.scrollUp = () => {
    $('#topofpage')[0].scrollIntoView({ behavior: 'smooth' });
};