export function getNetworkProvider(phoneNumber) {
    const mtnPrefixes = [
        '0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0819', 
        '0903', '0906', '0913', '0916'
    ];
    const airtelPrefixes = [
        '0701', '0708', '0802', '0808', '0812', '0901', '0902', '0907', '0912'
    ];
    const gloPrefixes = ['0705', '0805', '0807', '0811', '0815', '0905', '0915'];
    const etisalatPrefixes = ['0809', '0817', '0818', '0909', '0908'];

    // Extract the first 4 digits of the phone number
    const prefix = phoneNumber.substring(0, 4);

    if (mtnPrefixes.includes(prefix)) {
        return 'MTN';
    } else if (airtelPrefixes.includes(prefix)) {
        return 'Airtel';
    } else if (gloPrefixes.includes(prefix)) {
        return 'Glo';
    } else if (etisalatPrefixes.includes(prefix)) {
        return '9mobile';
    } else {
        return 'Unknown Network';
    }
}

// Example Usage
const phoneNumber = '08134567890';
console.log(getNetworkProvider(phoneNumber)); // Outputs the network provider
