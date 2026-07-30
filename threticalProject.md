Combining Network+ and Security+ is a fantastic way to build a solid foundation in IT. Employers love candidates who understand not just how networks operate, but how to protect them. 

For a beginner-level project that hits both domains perfectly and looks great on a resume, I highly recommend building a **Secure Segmented Virtual Network**.

Here is a complete breakdown of the project, how it maps to your studies, and exactly how to put it on your resume.

---

### The Project: Secure Segmented Virtual Network
**The Scenario:** You are tasked with building a small company network from scratch. The network needs a public-facing web server, an internal employee network, and a secure way for remote workers to access the internal network.

**The Tools (All Free):**
*   **VirtualBox** or **VMware Workstation Player** (To create your virtual machines).
*   **pfSense** (A free, industry-standard firewall/router OS).
*   **Linux (Ubuntu Server)** (For the web server and employee machines).
*   **Windows 10/11 VM** (For a standard employee machine).
*   **Wireshark** (For packet analysis).

#### Phase 1: Network Design & Subnetting (Network+)
1.  Create a new virtual network in VirtualBox/VMware set to "Internal Network" (this simulates a closed LAN).
2.  Install pfSense and assign it as your router/firewall. Give it a WAN interface and a LAN interface.
3.  Create three distinct subnets (VLANs) inside pfSense:
    *   **VLAN 10:** Management Network (for admins to access the firewall).
    *   **VLAN 20:** Employee Network (for internal users).
    *   **VLAN 30:** DMZ (Demilitarized Zone - for the web server).

#### Phase 2: Services & Routing (Network+)
1.  Set up pfSense as a DHCP server for VLAN 20 and VLAN 30.
2.  Install an Ubuntu Server VM on the DMZ network (VLAN 30) and install Apache (a web server).
3.  Ensure VLAN 20 can ping the web server, but ensure they are on different IP subnets routing through the firewall.

#### Phase 3: Security Controls & Firewall Rules (Security+)
1.  **Default Deny:** Ensure pfSense blocks ALL traffic by default.
2.  **DMZ Rules:** Create a rule allowing external (WAN) traffic to reach the web server (VLAN 30) *only* on Port 80 and 443 (HTTP/HTTPS).
3.  **Isolation:** Create a rule that explicitly **blocks** the Web Server (VLAN 30) from initiating connections to the Employee Network (VLAN 20). If the web server gets hacked, the hacker can't easily pivot to the employees.
4.  **Management Access:** Lock down the pfSense management interface so it can *only* be accessed from VLAN 10, not from the WAN or the Employee network.

#### Phase 4: Secure Remote Access (Security+)
1.  Set up the **OpenVPN** client built into pfSense.
2.  Create a certificate authority (PKI concept from Sec+) within pfSense.
3.  Generate a user certificate and configure an external client (like your actual laptop or phone) to connect to the VPN.
4.  Write a firewall rule stating that VPN users are treated like VLAN 20 employees.

#### Phase 5: Monitoring & Hardening (Both)
1.  Install **Snort** or **Suricata** (Intrusion Detection/Prevention System - IDS/IPS) on pfSense.
2.  Turn on basic rules to detect port scans or brute force attempts.
3.  Use **Wireshark** on one of your VMs to capture a ping or an HTTP request, proving you can read packet headers.

---

### How to put this on your resume
Do not call it a "Home Lab." Frame it as a professional project. You can list this under a "Technical Projects" section at the top of your resume, right under your summary.

**Secure Segmented Network Architecture**
*   Designed and deployed a virtualized multi-zone network architecture utilizing pfSense, segmenting traffic into Management, Employee, and DMZ VLANs to enforce strict boundary protection.
*   Configured stateful firewall rules to implement a "Default Deny" security posture, restricting lateral movement from the DMZ to the internal LAN.
*   Provisioned a Public Key Infrastructure (PKI) and deployed an OpenVPN server to facilitate secure, encrypted remote access for remote users.
*   Implemented and tuned an Intrusion Detection System (Snort/Suricata) to identify and block malicious traffic signatures.
*   Utilized Wireshark to analyze TCP/IP handshakes and DHCP/DNS traffic to troubleshoot network connectivity issues.

---

### Bonus Alternative (If you prefer Cloud over Virtualization)
**Project: Securing a Cloud Web Server (AWS Free Tier)**
*   Spin up a free-tier AWS EC2 instance (Linux).
*   **Network+:** Configure Virtual Private Clouds (VPCs), subnets, Route Tables, and Internet Gateways.
*   **Security+:** Write strict Security Groups (AWS firewalls) to only allow your specific IP address on port 22 (SSH), and the world on port 443. 
*   **Security+:** Hardening the OS (disabling root login, changing default SSH port, setting up SSH key-pairs instead of passwords).
*   **Resume Bullet:** *"Provisioned and hardened a Linux EC2 instance on AWS, configuring VPCs, Route Tables, and stringent Security Group rules to minimize the attack surface."*

### Tips for Success:
1.  **Document everything:** As you build, take screenshots. Put them in a PowerPoint or a simple Markdown file on GitHub. If an interviewer asks about your project, you want to be able to pull up a diagram.
2.  **Draw a network diagram:** Use a free tool like **draw.io** to map out your IP addresses, VLANs, and firewall rules. This is a highly sought-after skill.
3.  **Don't get discouraged:** pfSense and VLANs can be tricky the first time. If you get stuck, YouTube is your best friend (channels like *NetworkChuck* or *Lawrence Systems* are great for this exact project).
