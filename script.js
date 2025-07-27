// function downloadCV() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     // Set font
//     doc.setFont("helvetica");

//     // Header
//     doc.setFontSize(20);
//     doc.setTextColor(44, 62, 80);
//     doc.text("MD SAIFUR RAHMAN", 105, 20, { align: 'center' });

//     doc.setFontSize(12);
//     doc.setTextColor(52, 73, 94);
//     doc.text("Work Permit Receiver | Document Controller | Frontend Developer", 105, 28, { align: 'center' });

//     // Contact Info
//     doc.setFontSize(10);
//     doc.setTextColor(0, 0, 0);
//     doc.text("Phone: +966 55 845 2207", 20, 40);
//     doc.text("Email: saifur.cse.98@gmail.com", 20, 45);
//     doc.text("Location: Riyadh, Saudi Arabia", 20, 50);
//     doc.text("Iqama: 2590385635 (Transferable)", 20, 55);

//     // Line separator
//     doc.setDrawColor(102, 126, 234);
//     doc.line(20, 60, 190, 60);

//     // Professional Summary
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("PROFESSIONAL SUMMARY", 20, 70);

//     doc.setFontSize(9);
//     doc.setTextColor(0, 0, 0);
//     const summaryText = "Multiskilled professional with hands-on experience in Work Permit Receiving, Document Control, and Frontend Web Development, currently working in Saudi Arabia. Employed with Al Bawani Company on the high-profile Lucid Motors Project in Jeddah, alongside consultant Hill International. Skilled in managing all types of work permits (hot work, confined space, excavation, working at height), ensuring compliance with HSE regulations and project safety protocols.";
//     const splitSummary = doc.splitTextToSize(summaryText, 170);
//     doc.text(splitSummary, 20, 78);

//     // Work Experience
//     let yPos = 98;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("WORK EXPERIENCE", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(11);
//     doc.setTextColor(0, 0, 0);
//     doc.text("Work Permit Receiver (WPR) | February 2025 - Present", 20, yPos);

//     yPos += 5;
//     doc.setFontSize(9);
//     doc.text("Global Horizon & Co, KSA - Jeddah", 20, yPos);
//     yPos += 4;
//     doc.text("Client: Lucid Motors Factory KAEC | Consultant: Hills International", 20, yPos);
//     yPos += 4;
//     doc.text("Project: Lucid Advanced Manufacturing Plant | Value: 230 million SAR", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(11);
//     doc.text("Assistant Document Controller | Dec 2024 - Jan 2025", 20, yPos);

//     yPos += 5;
//     doc.setFontSize(9);
//     doc.text("Saudi Services for Electro Mechanic Works (SSEM)", 20, yPos);
//     yPos += 4;
//     doc.text("Client: Diriyah Company | Consultant: Saudi Electricity Company", 20, yPos);
//     yPos += 4;
//     doc.text("Project: New Diriyah Gate Substation | Value: $310 million", 20, yPos);

//     // Skills
//     yPos += 12;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("KEY SKILLS", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(9);
//     doc.setTextColor(0, 0, 0);
//     const skills = [
//         "• HSE, Consultants & Client Coordination",
//         "• Site Safety Protocols Compliance",
//         "• Permit Management & Safety Documentation",
//         "• Microsoft Office Suite (Word, Excel, PowerPoint)",
//         "• Document Control Systems & File Management",
//         "• Data Entry & Digital Record Keeping"
//     ];

//     skills.forEach(skill => {
//         doc.text(skill, 20, yPos);
//         yPos += 4;
//     });

//     // Education
//     yPos += 8;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("EDUCATION", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(11);
//     doc.setTextColor(0, 0, 0);
//     doc.text("B.Sc. in Computer Science Engineering", 20, yPos);
//     yPos += 5;
//     doc.setFontSize(9);
//     doc.text("International Islamic University Chittagong | April 2023 | CGPA: 3.709/4.00", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(11);
//     doc.text("Higher Secondary Certificate", 20, yPos);
//     yPos += 5;
//     doc.setFontSize(9);
//     doc.text("Comilla Victoria Government College | August 2016 | CGPA: 4.83/5.00", 20, yPos);

//     // Certifications
//     yPos += 12;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("CERTIFICATIONS", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(9);
//     doc.setTextColor(0, 0, 0);
//     doc.text("• Complete CompTIA Network+ (New Horizons, 2019)", 20, yPos);
//     yPos += 4;
//     doc.text("• Complete Web Design & Development (SIMEC SYSTEM LTD, 2021)", 20, yPos);
//     yPos += 4;
//     doc.text("• Full Stack Web Design & Development (Learnwithsumit.com, 2023)", 20, yPos);

//     // Languages
//     yPos += 12;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("LANGUAGES", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(9);
//     doc.setTextColor(0, 0, 0);
//     doc.text("• Bangla: Native/Bilingual  • English: Professional Working", 20, yPos);
//     yPos += 4;
//     doc.text("• Arabic: Basic Working  • Hindi: Working Proficiency", 20, yPos);

//     // Footer
//     yPos += 12;
//     doc.setFontSize(8);
//     doc.setTextColor(100, 100, 100);
//     doc.text("Available for immediate transfer with transferable Iqama", 105, yPos, { align: 'center' });

//     // Save the PDF
//     doc.save("MD_Saifur_Rahman_CV.pdf");
// }

// // Certificate file paths - UPDATE THESE WITH YOUR ACTUAL PDF FILE NAMES
// const certificates = {
//     comptia: {
//         title: "Complete CompTIA Network+",
//         provider: "New Horizons, Chittagong",
//         year: "2019",
//         filename: "comptia_certificate.pdf" // Change this to your actual file name
//     },
//     webdesign: {
//         title: "Complete Web Design & Development",
//         provider: "SIMEC SYSTEM LTD",
//         year: "2021",
//         filename: "webdesign_certificate.pdf" // Change this to your actual file name
//     },
//     fullstack: {
//         title: "Full Stack Web Design & Development",
//         provider: "Programming Hero",
//         year: "2021",
//         filename: "fullstack_certificate.pdf" // Change this to your actual file name
//     },
//     wpr: {
//         title: "Work Permit Receiver",
//         provider: "Adeptus",
//         year: "2025",
//         filename: "wpr_certificate.pdf" // Change this to your actual file name
//     },
// };

// let currentCertificateFile = '';

// function viewCertificate(certId) {
//     const cert = certificates[certId];
//     const modal = document.getElementById('certificateModal');
//     const modalTitle = document.getElementById('modalTitle');
//     const pdfViewer = document.getElementById('pdfViewer');

//     modalTitle.textContent = cert.title;
//     currentCertificateFile = cert.filename;

//     // Set the PDF source to your local file
//     pdfViewer.src = cert.filename;

//     modal.style.display = 'block';
// }

// function closeModal() {
//     const modal = document.getElementById('certificateModal');
//     const pdfViewer = document.getElementById('pdfViewer');
//     modal.style.display = 'none';
//     pdfViewer.src = ''; // Clear the PDF source
// }

// function downloadCertificate(certId) {
//     const cert = certificates[certId];
//     downloadFile(cert.filename, cert.title + '_Certificate.pdf');
// }

// function downloadCurrentCertificate() {
//     if (currentCertificateFile) {
//         downloadFile(currentCertificateFile, currentCertificateFile);
//     }
// }

// function openInNewTab() {
//     if (currentCertificateFile) {
//         window.open(currentCertificateFile, '_blank');
//     }
// }

// function downloadFile(filename, downloadName) {
//     // Create a temporary link element
//     const link = document.createElement('a');
//     link.href = filename;
//     link.download = downloadName || filename;
//     link.style.display = 'none';

//     // Add to body, click, and remove
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

// // Close modal when clicking outside
// window.onclick = function (event) {
//     const modal = document.getElementById('certificateModal');
//     if (event.target === modal) {
//         closeModal();
//     }
// }

// // Handle PDF loading errors
// document.getElementById('pdfViewer').onerror = function () {
//     this.style.display = 'none';
//     this.parentNode.insertAdjacentHTML('beforeend',
//         '<div style="padding: 50px; text-align: center; color: #e74c3c;">' +
//         '<h3>📄 Certificate Not Found</h3>' +
//         '<p>Please make sure the PDF file is in the same folder as this HTML file.</p>' +
//         '<p>Expected file: <strong>' + currentCertificateFile + '</strong></p>' +
//         '</div>'
//     );
// };

////////////////////////////////////

// function downloadCV() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     // Set font
//     doc.setFont("helvetica");

//     // Header
//     doc.setFontSize(20);
//     doc.setTextColor(44, 62, 80);
//     doc.text("MD SAIFUR RAHMAN", 105, 20, { align: 'center' });

//     doc.setFontSize(12);
//     doc.setTextColor(52, 73, 94);
//     doc.text("Work Permit Receiver | Document Controller | Frontend Developer", 105, 28, { align: 'center' });

//     // Contact Info
//     doc.setFontSize(10);
//     doc.setTextColor(0, 0, 0);
//     doc.text("Phone: +966 55 845 2207", 20, 40);
//     doc.text("Email: saifur.cse.98@gmail.com", 20, 45);
//     doc.text("Location: Riyadh, Saudi Arabia", 20, 50);
//     doc.text("Iqama: 2590385635 (Transferable)", 20, 55);

//     // Line separator
//     doc.setDrawColor(102, 126, 234);
//     doc.line(20, 60, 190, 60);

//     // Professional Summary
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("PROFESSIONAL SUMMARY", 20, 70);

//     doc.setFontSize(9);
//     doc.setTextColor(0, 0, 0);
//     const summaryText = "Multiskilled professional with hands-on experience in Work Permit Receiving, Document Control, and Frontend Web Development, currently working in Saudi Arabia. Employed with Al Bawani Company on the high-profile Lucid Motors Project in Jeddah, alongside consultant Hill International. Skilled in managing all types of work permits (hot work, confined space, excavation, working at height), ensuring compliance with HSE regulations and project safety protocols.";
//     const splitSummary = doc.splitTextToSize(summaryText, 170);
//     doc.text(splitSummary, 20, 78);

//     // Work Experience
//     let yPos = 98;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("WORK EXPERIENCE", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(11);
//     doc.setTextColor(0, 0, 0);
//     doc.text("Work Permit Receiver (WPR) | February 2025 - Present", 20, yPos);

//     yPos += 5;
//     doc.setFontSize(9);
//     doc.text("Global Horizon & Co, KSA - Jeddah", 20, yPos);
//     yPos += 4;
//     doc.text("Client: Lucid Motors Factory KAEC | Consultant: Hills International", 20, yPos);
//     yPos += 4;
//     doc.text("Project: Lucid Advanced Manufacturing Plant | Value: 230 million SAR", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(11);
//     doc.text("Assistant Document Controller | Dec 2024 - Jan 2025", 20, yPos);

//     yPos += 5;
//     doc.setFontSize(9);
//     doc.text("Saudi Services for Electro Mechanic Works (SSEM)", 20, yPos);
//     yPos += 4;
//     doc.text("Client: Diriyah Company | Consultant: Saudi Electricity Company", 20, yPos);
//     yPos += 4;
//     doc.text("Project: New Diriyah Gate Substation | Value: $310 million", 20, yPos);

//     // Skills
//     yPos += 12;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("KEY SKILLS", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(9);
//     doc.setTextColor(0, 0, 0);
//     const skills = [
//         "• HSE, Consultants & Client Coordination",
//         "• Site Safety Protocols Compliance",
//         "• Permit Management & Safety Documentation",
//         "• Microsoft Office Suite (Word, Excel, PowerPoint)",
//         "• Document Control Systems & File Management",
//         "• Data Entry & Digital Record Keeping"
//     ];

//     skills.forEach(skill => {
//         doc.text(skill, 20, yPos);
//         yPos += 4;
//     });

//     // Education
//     yPos += 8;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("EDUCATION", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(11);
//     doc.setTextColor(0, 0, 0);
//     doc.text("B.Sc. in Computer Science Engineering", 20, yPos);
//     yPos += 5;
//     doc.setFontSize(9);
//     doc.text("International Islamic University Chittagong | April 2023 | CGPA: 3.709/4.00", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(11);
//     doc.text("Higher Secondary Certificate", 20, yPos);
//     yPos += 5;
//     doc.setFontSize(9);
//     doc.text("Comilla Victoria Government College | August 2016 | CGPA: 4.83/5.00", 20, yPos);

//     // Certifications
//     yPos += 12;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("CERTIFICATIONS", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(9);
//     doc.setTextColor(0, 0, 0);
//     doc.text("• Complete CompTIA Network+ (New Horizons, 2019)", 20, yPos);
//     yPos += 4;
//     doc.text("• Complete Web Design & Development (SIMEC SYSTEM LTD, 2021)", 20, yPos);
//     yPos += 4;
//     doc.text("• Full Stack Web Design & Development (Learnwithsumit.com, 2023)", 20, yPos);

//     // Languages
//     yPos += 12;
//     doc.setFontSize(14);
//     doc.setTextColor(44, 62, 80);
//     doc.text("LANGUAGES", 20, yPos);

//     yPos += 8;
//     doc.setFontSize(9);
//     doc.setTextColor(0, 0, 0);
//     doc.text("• Bangla: Native/Bilingual  • English: Professional Working", 20, yPos);
//     yPos += 4;
//     doc.text("• Arabic: Basic Working  • Hindi: Working Proficiency", 20, yPos);

//     // Footer
//     yPos += 12;
//     doc.setFontSize(8);
//     doc.setTextColor(100, 100, 100);
//     doc.text("Available for immediate transfer with transferable Iqama", 105, yPos, { align: 'center' });

//     // Save the PDF
//     doc.save("MD_Saifur_Rahman_CV.pdf");
// }
// My Own CV File Path
const myCVFilePath = "MD_Saifur_Rahman.pdf"; // Change this to your actual CV file name

function downloadCV() {
    downloadFile(myCVFilePath, 'MD_Saifur_Rahman_CV.pdf');
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

function downloadv  File(filename, downloadName) {
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

// TÜV Certificates Management
const tuvCertificates = {
    safety: {
        title: "TÜV Safety Certification",
        filename: "tuv_safety_certificate.pdf" // Change to your actual file name
    },
    quality: {
        title: "TÜV Quality Management",
        filename: "tuv_quality_certificate.pdf" // Change to your actual file name
    },
    technical: {
        title: "TÜV Technical Standards",
        filename: "tuv_technical_certificate.pdf" // Change to your actual file name
    }
};

let currentTuvFile = '';

function viewTuvCertificate(tuvId) {
    const tuv = tuvCertificates[tuvId];
    const modal = document.getElementById('tuvModal');
    const modalTitle = document.getElementById('tuvModalTitle');
    const pdfViewer = document.getElementById('tuvPdfViewer');

    modalTitle.textContent = tuv.title;
    currentTuvFile = tuv.filename;
    pdfViewer.src = tuv.filename;
    modal.style.display = 'block';
}

function closeTuvModal() {
    const modal = document.getElementById('tuvModal');
    const pdfViewer = document.getElementById('tuvPdfViewer');
    modal.style.display = 'none';
    pdfViewer.src = '';
}

function downloadCurrentTuv() {
    if (currentTuvFile) {
        downloadFile(currentTuvFile, currentTuvFile);
    }
}

function openTuvInNewTab() {
    if (currentTuvFile) {
        window.open(currentTuvFile, '_blank');
    }
}

// Gallery Management
const galleryItems = {
    permits: {
        title: "Work Permit Management",
        description: "Comprehensive permit management system covering hot work, confined space, excavation, and working at height permits. Coordination with HSE teams, safety officers, and site personnel to ensure compliance with Saudi industrial safety standards.",
        details: [
            "Hot Work Permit Processing & Documentation",
            "Confined Space Entry Permit Coordination",
            "Excavation Permit Safety Assessments",
            "Working at Height Risk Evaluations",
            "HSE Team Coordination & Communication",
            "Client Safety Protocol Compliance"
        ],
        filename: "work_permits_gallery.pdf" // Your actual file
    },
    lucid: {
        title: "Lucid Motors Manufacturing Project",
        description: "Leading permit coordination for the prestigious Lucid Advanced Manufacturing Plant at KAEC. Managing MEP services documentation for this 230 million SAR automotive manufacturing facility.",
        details: [
            "MEP Services Phase I & II Coordination",
            "Hills International Consultant Liaison",
            "Lucid Motors Client Communication",
            "Advanced Manufacturing Safety Protocols",
            "High-Value Project Documentation (230M SAR)",
            "KAEC Industrial Zone Compliance"
        ],
        filename: "lucid_project_gallery.pdf"
    },
    substation: {
        title: "Diriyah Gate Substation Project",
        description: "Document control management for the construction of New Diriyah Gate 380/132/13.8kv substation. Supporting Saudi Electricity Company's $310 million infrastructure development.",
        details: [
            "380/132/13.8kv Substation Documentation",
            "1707 MVA Bulk Substation Management",
            "200 MVA Primary Substation Control",
            "Saudi Electricity Company Coordination",
            "Diriyah Company Client Relations",
            "Electrical Infrastructure Document Control"
        ],
        filename: "diriyah_substation_gallery.pdf"
    },
    safety: {
        title: "Safety Documentation & HSE Compliance",
        description: "Comprehensive safety documentation management ensuring full HSE compliance across industrial projects. Risk assessment support and safety protocol implementation.",
        details: [
            "HSE Compliance Documentation",
            "Safety Protocol Development",
            "Risk Assessment Documentation",
            "Incident Reporting Systems",
            "Safety Training Record Management",
            "Emergency Response Procedures"
        ],
        filename: "safety_documentation_gallery.pdf"
    },
    coordination: {
        title: "Client & Consultant Coordination",
        description: "Professional coordination between multiple stakeholders including international consultants, major clients, and site operations teams across high-value industrial projects.",
        details: [
            "Multi-Stakeholder Communication Management",
            "International Consultant Coordination",
            "Client Relationship Management",
            "Site Operations Team Liaison",
            "Project Status Reporting",
            "Cross-Functional Team Leadership"
        ],
        filename: "client_coordination_gallery.pdf"
    },
    documentation: {
        title: "Document Control & Digital Systems",
        description: "Advanced document control systems utilizing Microsoft Office suite, digital filing systems, and specialized tracking software for industrial project management.",
        details: [
            "Microsoft Office Advanced Usage",
            "Digital Filing System Implementation",
            "Document Tracking & Version Control",
            "Excel-Based Project Management",
            "Email Communication Systems",
            "Data Entry & Record Management"
        ],
        filename: "document_control_gallery.pdf"
    }
};

function viewGalleryItem(itemId) {
    const item = galleryItems[itemId];
    const modal = document.getElementById('galleryModal');
    const modalTitle = document.getElementById('galleryModalTitle');
    const modalContent = document.getElementById('galleryModalContent');

    modalTitle.textContent = item.title;

    modalContent.innerHTML = `
                <h3 style="color: #2c3e50; margin-bottom: 15px;">${item.title}</h3>
                <p style="color: #7f8c8d; line-height: 1.6; margin-bottom: 25px;">${item.description}</p>
                
                <h4 style="color: #34495e; margin-bottom: 15px;">Key Responsibilities & Achievements:</h4>
                <ul style="color: #555; line-height: 1.8; margin-bottom: 25px;">
                    ${item.details.map(detail => `<li style="margin-bottom: 8px;">✓ ${detail}</li>`).join('')}
                </ul>
                
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button class="modal-btn download" onclick="downloadGalleryItem('${itemId}')">
                        📄 Download Portfolio
                    </button>
                    <button class="modal-btn" onclick="openGalleryInNewTab('${itemId}')">
                        🔗 View Full Documentation
                    </button>
                </div>
            `;

    modal.style.display = 'block';
}

function closeGalleryModal() {
    document.getElementById('galleryModal').style.display = 'none';
}

function downloadGalleryItem(itemId) {
    const item = galleryItems[itemId];
    downloadFile(item.filename, item.filename);
}

function openGalleryInNewTab(itemId) {
    const item = galleryItems[itemId];
    window.open(item.filename, '_blank');
}

// Enhanced modal close functionality
window.onclick = function (event) {
    const certModal = document.getElementById('certificateModal');
    const tuvModal = document.getElementById('tuvModal');
    const galleryModal = document.getElementById('galleryModal');

    if (event.target === certModal) {
        closeModal();
    }
    if (event.target === tuvModal) {
        closeTuvModal();
    }
    if (event.target === galleryModal) {
        closeGalleryModal();
    }
}
