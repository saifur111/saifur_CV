function downloadCV() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set font
    doc.setFont("helvetica");

    // Header
    doc.setFontSize(20);
    doc.setTextColor(44, 62, 80);
    doc.text("MD SAIFUR RAHMAN", 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(52, 73, 94);
    doc.text("Work Permit Receiver | Document Controller | Frontend Developer", 105, 28, { align: 'center' });

    // Contact Info
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Phone: +966 55 845 2207", 20, 40);
    doc.text("Email: saifur.cse.98@gmail.com", 20, 45);
    doc.text("Location: Riyadh, Saudi Arabia", 20, 50);
    doc.text("Iqama: 2590385635 (Transferable)", 20, 55);

    // Line separator
    doc.setDrawColor(102, 126, 234);
    doc.line(20, 60, 190, 60);

    // Professional Summary
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text("PROFESSIONAL SUMMARY", 20, 70);

    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    const summaryText = "Multiskilled professional with hands-on experience in Work Permit Receiving, Document Control, and Frontend Web Development, currently working in Saudi Arabia. Employed with Al Bawani Company on the high-profile Lucid Motors Project in Jeddah, alongside consultant Hill International. Skilled in managing all types of work permits (hot work, confined space, excavation, working at height), ensuring compliance with HSE regulations and project safety protocols.";
    const splitSummary = doc.splitTextToSize(summaryText, 170);
    doc.text(splitSummary, 20, 78);

    // Work Experience
    let yPos = 98;
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text("WORK EXPERIENCE", 20, yPos);

    yPos += 8;
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Work Permit Receiver (WPR) | February 2025 - Present", 20, yPos);

    yPos += 5;
    doc.setFontSize(9);
    doc.text("Global Horizon & Co, KSA - Jeddah", 20, yPos);
    yPos += 4;
    doc.text("Client: Lucid Motors Factory KAEC | Consultant: Hills International", 20, yPos);
    yPos += 4;
    doc.text("Project: Lucid Advanced Manufacturing Plant | Value: 230 million SAR", 20, yPos);

    yPos += 8;
    doc.setFontSize(11);
    doc.text("Assistant Document Controller | Dec 2024 - Jan 2025", 20, yPos);

    yPos += 5;
    doc.setFontSize(9);
    doc.text("Saudi Services for Electro Mechanic Works (SSEM)", 20, yPos);
    yPos += 4;
    doc.text("Client: Diriyah Company | Consultant: Saudi Electricity Company", 20, yPos);
    yPos += 4;
    doc.text("Project: New Diriyah Gate Substation | Value: $310 million", 20, yPos);

    // Skills
    yPos += 12;
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text("KEY SKILLS", 20, yPos);

    yPos += 8;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    const skills = [
        "• HSE, Consultants & Client Coordination",
        "• Site Safety Protocols Compliance",
        "• Permit Management & Safety Documentation",
        "• Microsoft Office Suite (Word, Excel, PowerPoint)",
        "• Document Control Systems & File Management",
        "• Data Entry & Digital Record Keeping"
    ];

    skills.forEach(skill => {
        doc.text(skill, 20, yPos);
        yPos += 4;
    });

    // Education
    yPos += 8;
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text("EDUCATION", 20, yPos);

    yPos += 8;
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("B.Sc. in Computer Science Engineering", 20, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.text("International Islamic University Chittagong | April 2023 | CGPA: 3.709/4.00", 20, yPos);

    yPos += 8;
    doc.setFontSize(11);
    doc.text("Higher Secondary Certificate", 20, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.text("Comilla Victoria Government College | August 2016 | CGPA: 4.83/5.00", 20, yPos);

    // Certifications
    yPos += 12;
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text("CERTIFICATIONS", 20, yPos);

    yPos += 8;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text("• Complete CompTIA Network+ (New Horizons, 2019)", 20, yPos);
    yPos += 4;
    doc.text("• Complete Web Design & Development (SIMEC SYSTEM LTD, 2021)", 20, yPos);
    yPos += 4;
    doc.text("• Full Stack Web Design & Development (Learnwithsumit.com, 2023)", 20, yPos);

    // Languages
    yPos += 12;
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text("LANGUAGES", 20, yPos);

    yPos += 8;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text("• Bangla: Native/Bilingual  • English: Professional Working", 20, yPos);
    yPos += 4;
    doc.text("• Arabic: Basic Working  • Hindi: Working Proficiency", 20, yPos);

    // Footer
    yPos += 12;
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("Available for immediate transfer with transferable Iqama", 105, yPos, { align: 'center' });

    // Save the PDF
    doc.save("MD_Saifur_Rahman_CV.pdf");
}

// Certificate file paths - UPDATE THESE WITH YOUR ACTUAL PDF FILE NAMES
const certificates = {
    comptia: {
        title: "Complete CompTIA Network+",
        provider: "New Horizons, Chittagong",
        year: "2019",
        filename: "comptia_certificate.pdf" // Change this to your actual file name
    },
    webdesign: {
        title: "Complete Web Design & Development",
        provider: "SIMEC SYSTEM LTD",
        year: "2021",
        filename: "webdesign_certificate.pdf" // Change this to your actual file name
    },
    fullstack: {
        title: "Full Stack Web Design & Development",
        provider: "Learnwithsumit.com",
        year: "2023",
        filename: "fullstack_certificate.pdf" // Change this to your actual file name
    },
    wpr: {
        title: "Work Permit Receiver",
        provider: "Adeptus",
        year: "2025",
        filename: "wpr_certificate.pdf" // Change this to your actual file name
    },
};

let currentCertificateFile = '';

function viewCertificate(certId) {
    const cert = certificates[certId];
    const modal = document.getElementById('certificateModal');
    const modalTitle = document.getElementById('modalTitle');
    const pdfViewer = document.getElementById('pdfViewer');

    modalTitle.textContent = cert.title;
    currentCertificateFile = cert.filename;

    // Set the PDF source to your local file
    pdfViewer.src = cert.filename;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('certificateModal');
    const pdfViewer = document.getElementById('pdfViewer');
    modal.style.display = 'none';
    pdfViewer.src = ''; // Clear the PDF source
}

function downloadCertificate(certId) {
    const cert = certificates[certId];
    downloadFile(cert.filename, cert.title + '_Certificate.pdf');
}

function downloadCurrentCertificate() {
    if (currentCertificateFile) {
        downloadFile(currentCertificateFile, currentCertificateFile);
    }
}

function openInNewTab() {
    if (currentCertificateFile) {
        window.open(currentCertificateFile, '_blank');
    }
}

function downloadFile(filename, downloadName) {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filename;
    link.download = downloadName || filename;
    link.style.display = 'none';

    // Add to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Handle PDF loading errors
document.getElementById('pdfViewer').onerror = function () {
    this.style.display = 'none';
    this.parentNode.insertAdjacentHTML('beforeend',
        '<div style="padding: 50px; text-align: center; color: #e74c3c;">' +
        '<h3>📄 Certificate Not Found</h3>' +
        '<p>Please make sure the PDF file is in the same folder as this HTML file.</p>' +
        '<p>Expected file: <strong>' + currentCertificateFile + '</strong></p>' +
        '</div>'
    );
};