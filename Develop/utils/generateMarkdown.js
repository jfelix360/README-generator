const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]  
    `;
  }
  else if (license === 'Boost') {
    return `
    [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]
    `;
  }
  else if (license === 'BSD 3-Clause') {
    return `
    [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]
    `;
  }
  else if (license === 'BSD 2-Clause') {
    return `
    [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]
    `;
  }
  else if (license === 'Creative Commons') {
    return `
    [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]
    `;
  }
  else if (license === 'Creative Commons') {
    return `
    [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]
    `;
  }
  else if (license === 'Eclipse') {
    return `
    [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]
    `;
  }
  else if (license === 'GNU GPL v3') {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
    `;
  }
  else if (license === 'GNU GPL v2') {
    return `
    [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]
    `;
  }
  else if (license === 'GNU AGPL v3') {
    return `
    [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]
    `;
  }
  else if (license === 'GNU LGPL v3') {
    return `
    [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]
    `;
  }
  else if (license === 'GNU FDL v1.3') {
    return `
    [![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)]
    `;
  }
  else if (license === 'The Hippocratic License 2.1') {
    return `
    [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]
    `;
  }
  else if (license === 'The Hippocratic License 3.0') {
    return `
    [![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]
    `;
  }
  else if (license === 'IBM Public License Version 1.0') {
    return `
    [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]
    `;
  }
  else if (license === 'ISC License') {
    return `
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]
    `;
  }
  else if (license === 'MIT License') {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
    `;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `
    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]
    `;
  }
  else if (license === 'Attribution License') {
    return `
    [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]
    `;
  }
  else if (license === 'Open Database License') {
    return `
    [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]
    `;
  }
  else if (license === 'Public Domain Dedication and License') {
    return `
    [![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]
    `;
  }
  else if (license === 'Perl License') {
    return `
    [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]
    `;
  }
  else if (license === 'Artistic License 2.0') {
    return `
    [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]
    `;
  }
  else if (license === 'SIL Open Font License 1.1') {
    return `
    [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]
    `;
  }
  else if (license === 'The Unlicense') {
    return `
    [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]
    `;
  }
  else if (license === 'The Do What the Fuck You Want to Public License') {
    return `
    [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]
    `;
  }
  else if (license === 'The Zlib License') {
    return `
    [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]
    `;
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return `
    (https://opensource.org/licenses/Apache-2.0)  
    `;
  }
  else if (license === 'Boost') {
    return `
    (https://www.boost.org/LICENSE_1_0.txt)
    `;
  }
  else if (license === 'BSD 3-Clause') {
    return `
    (https://opensource.org/licenses/BSD-3-Clause)
    `;
  }
  else if (license === 'BSD 2-Clause') {
    return `
    (https://opensource.org/licenses/BSD-2-Clause)
    `;
  }
  else if (license === 'Creative Commons') {
    return `
    (http://creativecommons.org/publicdomain/zero/1.0/)
    `;
  }
  else if (license === 'Eclipse') {
    return `
    (https://opensource.org/licenses/EPL-1.0)
    `;
  }
  else if (license === 'GNU GPL v3') {
    return `
    (https://www.gnu.org/licenses/gpl-3.0)
    `;
  }
  else if (license === 'GNU GPL v2') {
    return `
    (https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
    `;
  }
  else if (license === 'GNU AGPL v3') {
    return `
    (https://www.gnu.org/licenses/agpl-3.0)
    `;
  }
  else if (license === 'GNU LGPL v3') {
    return `
    (https://www.gnu.org/licenses/lgpl-3.0)
    `;
  }
  else if (license === 'GNU FDL v1.3') {
    return `
    (https://www.gnu.org/licenses/fdl-1.3)
    `;
  }
  else if (license === 'The Hippocratic License 2.1') {
    return `
    (https://firstdonoharm.dev)
    `;
  }
  else if (license === 'The Hippocratic License 3.0') {
    return `
    (https://firstdonoharm.dev)
    `;
  }
  else if (license === 'IBM Public License Version 1.0') {
    return `
    (https://opensource.org/licenses/IPL-1.0)
    `;
  }
  else if (license === 'ISC License') {
    return `
    (https://opensource.org/licenses/ISC)
    `;
  }
  else if (license === 'MIT License') {
    return `
    (https://opensource.org/licenses/MIT)
    `;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `
    (https://opensource.org/licenses/MPL-2.0)
    `;
  }
  else if (license === 'Attribution License') {
    return `
    (https://opendatacommons.org/licenses/by/)
    `
  }
  else if (license === 'Open Database License') {
    return `
    (https://opendatacommons.org/licenses/odbl/)
    `;
  }
  else if (license === 'Public Domain Dedication and License') {
    return `
    (https://opendatacommons.org/licenses/pddl/)
    `;
  }
  else if (license === 'Perl License') {
    return `
    (https://opensource.org/licenses/Artistic-2.0)
    `;
  }
  else if (license === 'Artistic License 2.0') {
    return `
    (https://opensource.org/licenses/Artistic-2.0)
    `;
  }
  else if (license === 'SIL Open Font License 1.1') {
    return `
    (https://opensource.org/licenses/OFL-1.1)
    `;
  }
  else if (license === 'The Unlicense') {
    return `
    (http://unlicense.org/)
    `;
  }
  else if (license === 'The Do What the Fuck You Want to Public License') {
    return `
    (http://www.wtfpl.net/about/)
    `;
  }
  else if (license === 'The Zlib License') {
    return `
    (https://opensource.org/licenses/Zlib)
    `;
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache 2.0') {
    return `
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.  
    `;
  }
  else if (license === 'Boost') {
    return `
Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
    `;
  }
  else if (license === 'BSD 3-Clause') {
    return `
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and 
the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote 
products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR 
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    `;
  }
  else if (license === 'BSD 2-Clause') {
    return `
Redistribution and use in source and binary forms, with or without modification, are permitted provided 
that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and 
the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED 
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR 
PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT 
OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND 
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    `;
  }
  else if (license === 'Creative Commons') {
    return `
The laws of most jurisdictions throughout the world automatically confer exclusive Copyright and Related Rights (defined below) upon the creator and subsequent owner(s) (each and all, an "owner") of an original work of authorship and/or a database (each, a "Work").

Certain owners wish to permanently relinquish those rights to a Work for the purpose of contributing to a commons of creative, cultural and scientific works ("Commons") that the public can reliably and without fear of later claims of infringement build upon, modify, incorporate in other works, reuse and redistribute as freely as possible in any form whatsoever and for any purposes, including without limitation commercial purposes. These owners may contribute to the Commons to promote the ideal of a free culture and the further production of creative, cultural and scientific works, or to gain reputation or greater distribution for their Work in part through the use and efforts of others.

For these and/or other purposes and motivations, and without any expectation of additional consideration or compensation, the person associating CC0 with a Work (the "Affirmer"), to the extent that he or she is an owner of Copyright and Related Rights in the Work, voluntarily elects to apply CC0 to the Work and publicly distribute the Work under its terms, with knowledge of his or her Copyright and Related Rights in the Work and the meaning and intended legal effect of CC0 on those rights.

1. Copyright and Related Rights. A Work made available under CC0 may be protected by copyright and related or neighboring rights ("Copyright and Related Rights"). Copyright and Related Rights include, but are not limited to, the following:

the right to reproduce, adapt, distribute, perform, display, communicate, and translate a Work;
moral rights retained by the original author(s) and/or performer(s);
publicity and privacy rights pertaining to a person's image or likeness depicted in a Work;
rights protecting against unfair competition in regards to a Work, subject to the limitations in paragraph 4(a), below;
rights protecting the extraction, dissemination, use and reuse of data in a Work;
database rights (such as those arising under Directive 96/9/EC of the European Parliament and of the Council of 11 March 1996 on the legal protection of databases, and under any national implementation thereof, including any amended or successor version of such directive); and
other similar, equivalent or corresponding rights throughout the world based on applicable law or treaty, and any national implementations thereof.

2. Waiver. To the greatest extent permitted by, but not in contravention of, applicable law, Affirmer hereby overtly, fully, permanently, irrevocably and unconditionally waives, abandons, and surrenders all of Affirmer's Copyright and Related Rights and associated claims and causes of action, whether now known or unknown (including existing as well as future claims and causes of action), in the Work (i) in all territories worldwide, (ii) for the maximum duration provided by applicable law or treaty (including future time extensions), (iii) in any current or future medium and for any number of copies, and (iv) for any purpose whatsoever, including without limitation commercial, advertising or promotional purposes (the "Waiver"). Affirmer makes the Waiver for the benefit of each member of the public at large and to the detriment of Affirmer's heirs and successors, fully intending that such Waiver shall not be subject to revocation, rescission, cancellation, termination, or any other legal or equitable action to disrupt the quiet enjoyment of the Work by the public as contemplated by Affirmer's express Statement of Purpose.

3. Public License Fallback. Should any part of the Waiver for any reason be judged legally invalid or ineffective under applicable law, then the Waiver shall be preserved to the maximum extent permitted taking into account Affirmer's express Statement of Purpose. In addition, to the extent the Waiver is so judged Affirmer hereby grants to each affected person a royalty-free, non transferable, non sublicensable, non exclusive, irrevocable and unconditional license to exercise Affirmer's Copyright and Related Rights in the Work (i) in all territories worldwide, (ii) for the maximum duration provided by applicable law or treaty (including future time extensions), (iii) in any current or future medium and for any number of copies, and (iv) for any purpose whatsoever, including without limitation commercial, advertising or promotional purposes (the "License"). The License shall be deemed effective as of the date CC0 was applied by Affirmer to the Work. Should any part of the License for any reason be judged legally invalid or ineffective under applicable law, such partial invalidity or ineffectiveness shall not invalidate the remainder of the License, and in such case Affirmer hereby affirms that he or she will not (i) exercise any of his or her remaining Copyright and Related Rights in the Work or (ii) assert any associated claims and causes of action with respect to the Work, in either case contrary to Affirmer's express Statement of Purpose.

4. Limitations and Disclaimers.

No trademark or patent rights held by Affirmer are waived, abandoned, surrendered, licensed or otherwise affected by this document.
Affirmer offers the Work as-is and makes no representations or warranties of any kind concerning the Work, express, implied, statutory or otherwise, including without limitation warranties of title, merchantability, fitness for a particular purpose, non infringement, or the absence of latent or other defects, accuracy, or the present or absence of errors, whether or not discoverable, all to the greatest extent permissible under applicable law.
Affirmer disclaims responsibility for clearing rights of other persons that may apply to the Work or any use thereof, including without limitation any person's Copyright and Related Rights in the Work. Further, Affirmer disclaims responsibility for obtaining any necessary consents, permissions or other rights required for any use of the Work.
Affirmer understands and acknowledges that Creative Commons is not a party to this document and has no duty or obligation with respect to this CC0 or use of the Work.
    `;
  }
  else if (license === 'Eclipse') {
    return `
Eclipse Public License, Version 1.0 (EPL-1.0)
THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

1. DEFINITIONS

"Contribution" means:

a) in the case of the initial Contributor, the initial code and documentation distributed under this Agreement, and
b) in the case of each subsequent Contributor:
i) changes to the Program, and
ii) additions to the Program; where such changes and/or additions to the Program originate from and are distributed by that particular Contributor. A Contribution 'originates' from a Contributor if it was added to the Program by such Contributor itself or anyone acting on such Contributor's behalf. Contributions do not include additions to the Program which: (i) are separate modules of software distributed in conjunction with the Program under their own license agreement, and (ii) are not derivative works of the Program.
    `;
  }
  else if (license === 'GNU GPL v3') {
    return `
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
    `;
  }
  else if (license === 'GNU GPL v2') {
    return `
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
    `;
  }
  else if (license === 'GNU AGPL v3') {
    return `
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
    `;
  }
  else if (license === 'GNU LGPL v3') {
    return `
GNU LESSER GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>

Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.

This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of the GNU General Public License, supplemented by the additional permissions listed below.
    `;
  }
  else if (license === 'GNU FDL v1.3') {
    return `
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3
    or any later version published by the Free Software Foundation;
    with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
    A copy of the license is included in the section entitled "GNU
    Free Documentation License".
    `;
  }
  else if (license === 'The Hippocratic License 2.1') {
    return `
Hippocratic License Version Number: 2.1.

Purpose. The purpose of this License is for the Licensor named above to permit the Licensee (as defined below) broad permission, if consistent with Human Rights Laws and Human Rights Principles (as each is defined below), to use and work with the Software (as defined below) within the full scope of Licensor’s copyright and patent rights, if any, in the Software, while ensuring attribution and protecting the Licensor from liability.

Permission and Conditions. The Licensor grants permission by this license (“License”), free of charge, to the extent of Licensor’s rights under applicable copyright and patent law, to any person or entity (the “Licensee”) obtaining a copy of this software and associated documentation files (the “Software”), to do everything with the Software that would otherwise infringe (i) the Licensor’s copyright in the Software or (ii) any patent claims to the Software that the Licensor can license or becomes able to license, subject to all of the following terms and conditions:

* Acceptance. This License is automatically offered to every person and entity subject to its terms and conditions. Licensee accepts this License and agrees to its terms and conditions by taking any action with the Software that, absent this License, would infringe any intellectual property right held by Licensor.

* Notice. Licensee must ensure that everyone who gets a copy of any part of this Software from Licensee, with or without changes, also receives the License and the above copyright notice (and if included by the Licensor, patent, trademark and attribution notice). Licensee must cause any modified versions of the Software to carry prominent notices stating that Licensee changed the Software. For clarity, although Licensee is free to create modifications of the Software and distribute only the modified portion created by Licensee with additional or different terms, the portion of the Software not modified must be distributed pursuant to this License. If anyone notifies Licensee in writing that Licensee has not complied with this Notice section, Licensee can keep this License by taking all practical steps to comply within 30 days after the notice. If Licensee does not do so, Licensee’s License (and all rights licensed hereunder) shall end immediately.

* Compliance with Human Rights Principles and Human Rights Laws.

    1. Human Rights Principles.

        (a) Licensee is advised to consult the articles of the United Nations Universal Declaration of Human Rights and the United Nations Global Compact that define recognized principles of international human rights (the “Human Rights Principles”). Licensee shall use the Software in a manner consistent with Human Rights Principles.

        (b) Unless the Licensor and Licensee agree otherwise, any dispute, controversy, or claim arising out of or relating to (i) Section 1(a) regarding Human Rights Principles, including the breach of Section 1(a), termination of this License for breach of the Human Rights Principles, or invalidity of Section 1(a) or (ii) a determination of whether any Law is consistent or in conflict with Human Rights Principles pursuant to Section 2, below, shall be settled by arbitration in accordance with the Hague Rules on Business and Human Rights Arbitration (the “Rules”); provided, however, that Licensee may elect not to participate in such arbitration, in which event this License (and all rights licensed hereunder) shall end immediately. The number of arbitrators shall be one unless the Rules require otherwise.

        Unless both the Licensor and Licensee agree to the contrary: (1) All documents and information concerning the arbitration shall be public and may be disclosed by any party; (2) The repository referred to under Article 43 of the Rules shall make available to the public in a timely manner all documents concerning the arbitration which are communicated to it, including all submissions of the parties, all evidence admitted into the record of the proceedings, all transcripts or other recordings of hearings and all orders, decisions and awards of the arbitral tribunal, subject only to the arbitral tribunal's powers to take such measures as may be necessary to safeguard the integrity of the arbitral process pursuant to Articles 18, 33, 41 and 42 of the Rules; and (3) Article 26(6) of the Rules shall not apply.

    2. Human Rights Laws. The Software shall not be used by any person or entity for any systems, activities, or other uses that violate any Human Rights Laws.  “Human Rights Laws” means any applicable laws, regulations, or rules (collectively, “Laws”) that protect human, civil, labor, privacy, political, environmental, security, economic, due process, or similar rights; provided, however, that such Laws are consistent and not in conflict with Human Rights Principles (a dispute over the consistency or a conflict between Laws and Human Rights Principles shall be determined by arbitration as stated above).  Where the Human Rights Laws of more than one jurisdiction are applicable or in conflict with respect to the use of the Software, the Human Rights Laws that are most protective of the individuals or groups harmed shall apply.

    3. Indemnity. Licensee shall hold harmless and indemnify Licensor (and any other contributor) against all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including Licensor’s reasonable attorneys’ fees, arising out of or relating to Licensee’s use of the Software in violation of Human Rights Laws or Human Rights Principles.

* Failure to Comply. Any failure of Licensee to act according to the terms and conditions of this License is both a breach of the License and an infringement of the intellectual property rights of the Licensor (subject to exceptions under Laws, e.g., fair use). In the event of a breach or infringement, the terms and conditions of this License may be enforced by Licensor under the Laws of any jurisdiction to which Licensee is subject. Licensee also agrees that the Licensor may enforce the terms and conditions of this License against Licensee through specific performance (or similar remedy under Laws) to the extent permitted by Laws. For clarity, except in the event of a breach of this License, infringement, or as otherwise stated in this License, Licensor may not terminate this License with Licensee.

* Enforceability and Interpretation. If any term or provision of this License is determined to be invalid, illegal, or unenforceable by a court of competent jurisdiction, then such invalidity, illegality, or unenforceability shall not affect any other term or provision of this License or invalidate or render unenforceable such term or provision in any other jurisdiction; provided, however, subject to a court modification pursuant to the immediately following sentence, if any term or provision of this License pertaining to Human Rights Laws or Human Rights Principles is deemed invalid, illegal, or unenforceable against Licensee by a court of competent jurisdiction, all rights in the Software granted to Licensee shall be deemed null and void as between Licensor and Licensee. Upon a determination that any term or provision is invalid, illegal, or unenforceable, to the extent permitted by Laws, the court may modify this License to affect the original purpose that the Software be used in compliance with Human Rights Principles and Human Rights Laws as closely as possible. The language in this License shall be interpreted as to its fair meaning and not strictly for or against any party.

* Disclaimer. TO THE FULL EXTENT ALLOWED BY LAW, THIS SOFTWARE COMES “AS IS,” WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, AND LICENSOR AND ANY OTHER CONTRIBUTOR SHALL NOT BE LIABLE TO ANYONE FOR ANY DAMAGES OR OTHER LIABILITY ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THIS LICENSE, UNDER ANY KIND OF LEGAL CLAIM.

This Hippocratic License is an Ethical Source license (https://ethicalsource.dev) and is offered for use by licensors and licensees at their own risk, on an “AS IS” basis, and with no warranties express or implied, to the maximum extent permitted by Laws.

    `;
  }
  else if (license === 'The Hippocratic License 3.0') {
    return `
**HIPPOCRATIC LICENSE**
**Version 3.0, October 2021**
**TERMS AND CONDITIONS**

TERMS AND CONDITIONS FOR USE, COPY, MODIFICATION, PREPARATION OF DERIVATIVE WORK, REPRODUCTION, AND DISTRIBUTION:

1.  **DEFINITIONS:**

  *This section defines certain terms used throughout this license agreement.*

  1.1.  "License" means the terms and conditions, as stated herein, for use, copy, modification, preparation of derivative work, reproduction, and distribution of Software (as defined below).

  1.2.  "Licensor" means the copyright and/or patent owner or entity authorized by the copyright and/or patent owner that is granting the License.

  1.3.  "Licensee" means the individual or entity exercising permissions granted by this License, including the use, copy, modification, preparation of derivative work, reproduction, and distribution of Software (as defined below).

  1.4.  "Software" means any copyrighted work, including but not limited to software code, authored by Licensor and made available under this License.

  1.5.  "Supply Chain" means the sequence of processes involved in the production and/or distribution of a commodity, good, or service offered by the Licensee.

  1.6.  "Supply Chain Impacted Party" or "Supply Chain Impacted Parties" means any person(s) directly impacted by any of Licensee's Supply Chain, including the practices of all persons or entities within the Supply Chain prior to a good or service reaching the Licensee.

  1.7.  "Duty of Care" is defined by its use in tort law, delict law, and/or similar bodies of law closely related to tort and/or delict law, including without limitation, a requirement to act with the watchfulness, attention, caution, and prudence that a reasonable person in the same or similar circumstances would use towards any Supply Chain Impacted Party.

  1.8.  "Worker" is defined to include any and all permanent, temporary, and agency workers, as well as piece-rate, salaried, hourly paid, legal young (minors), part-time, night, and migrant workers.

2.  **INTELLECTUAL PROPERTY GRANTS:**

  *This section identifies intellectual property rights granted to a Licensee*.

  2.1.  *Grant of Copyright License*: Subject to the terms and conditions of this License, Licensor hereby grants to Licensee a worldwide, non-exclusive, no-charge, royalty-free copyright license to use, copy, modify, prepare derivative work, reproduce, or distribute the Software, Licensor authored modified software, or other work derived from the Software.

  2.2  *Grant of Patent License*: Subject to the terms and conditions of this License, Licensor hereby grants Licensee a worldwide, non-exclusive, no-charge, royalty-free patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer Software.

3.  **ETHICAL STANDARDS:**

  *This section lists conditions the Licensee must comply with in order to have rights under this License.*

  The rights granted to the Licensee by this License are expressly made subject to the Licensee's ongoing compliance with the following conditions:

  3.1.  The Licensee SHALL NOT, whether directly or indirectly, through agents or assigns:

    3.1.1.  Infringe upon any person's right to life or security of person, engage in extrajudicial killings, or commit murder, without lawful cause
    (See Article 3, *United Nations Universal Declaration of Human Rights*; Article 6, *International Covenant on Civil and Political Rights*)

    3.1.2.  Hold any person in slavery, servitude, or forced labor
    (See Article 4, *United Nations Universal Declaration of Human Rights*; Article 8, *International Covenant on Civil and Political Rights*);

    3.1.3.  Contribute to the institution of slavery, slave trading, forced labor, or unlawful child labor
    (See Article 4, *United Nations Universal Declaration of Human Rights*; Article 8, *International Covenant on Civil and Political Rights*);

    3.1.4.  Torture or subject any person to cruel, inhumane, or degrading treatment or punishment
    (See Article 5, *United Nations Universal Declaration of Human Rights*; Article 7, *International Covenant on Civil and Political Rights*);

    3.1.5.  Discriminate on the basis of sex, gender, sexual orientation, race, ethnicity, nationality, religion, caste, age, medical disability or impairment, and/or any other like circumstances
    (See Article 7, *United Nations Universal Declaration of Human Rights*; Article 2, *International Covenant on Economic, Social and Cultural Rights*; Article 26, *International Covenant on Civil and Political Rights*);

    3.1.6.  Prevent any person from exercising his/her/their right to seek an effective remedy by a competent court or national tribunal (including domestic judicial systems, international courts, arbitration bodies, and other adjudicating bodies) for actions violating the fundamental rights granted to him/her/them by applicable constitutions, applicable laws, or by this License
    (See Article 8, *United Nations Universal Declaration of Human Rights*; Articles 9 and 14, *International Covenant on Civil and Political Rights*);

    3.1.7.  Subject any person to arbitrary arrest, detention, or exile
    (See Article 9, *United Nations Universal Declaration of Human Rights*; Article 9, *International Covenant on Civil and Political Rights*);

    3.1.8.  Subject any person to arbitrary interference with a person's privacy, family, home, or correspondence without the express written consent of the person
    (See Article 12, *United Nations Universal Declaration of Human Rights*; Article 17, *International Covenant on Civil and Political Rights*);

    3.1.9.  Arbitrarily deprive any person of his/her/their property
    (See Article 17, *United Nations Universal Declaration of Human Rights*);

    3.1.10. Forcibly remove indigenous peoples from their lands or territories or take any action with the aim or effect of dispossessing indigenous peoples from their lands, territories, or resources, including without limitation the intellectual property or traditional knowledge of indigenous peoples, without the free, prior, and informed consent of indigenous peoples concerned
    (See Articles 8 and 10, *United Nations Declaration on the Rights of Indigenous Peoples*);

    3.1.11. (Module -- Carbon Underground 200) Be an individual or entity, or a representative, agent, affiliate, successor, attorney, or assign of an individual or entity, on the FFI Solutions Carbon Underground 200 list;

    3.1.12. (Module -- Ecocide) Commit ecocide:

      3.1.12.1  For the purpose of this section, "ecocide" means unlawful or wanton acts committed with knowledge that there is a substantial likelihood of severe and either widespread or long-term damage to the environment being caused by those acts;

      3.1.12.2  For the purpose of further defining ecocide and the terms contained in the previous paragraph:

        3.1.12.2.1.  "Wanton" means with reckless disregard for damage which would be clearly excessive in relation to the social and economic benefits anticipated;

        3.1.12.2.2.  "Severe" means damage which involves very serious adverse changes, disruption, or harm to any element of the environment, including grave impacts on human life or natural, cultural, or economic resources;

        3.1.12.2.3.  "Widespread" means damage which extends beyond a limited geographic area, crosses state boundaries, or is suffered by an entire ecosystem or species or a large number of human beings;

        3.1.12.2.4.  "Long-term" means damage which is irreversible or which cannot be redressed through natural recovery within a reasonable period of time; and

        3.1.12.2.5.  "Environment" means the earth, its biosphere, cryosphere, lithosphere, hydrosphere, and atmosphere, as well as outer space

			(See Section II, *Independent Expert Panel for the Legal Definition of Ecocide*, Stop Ecocide Foundation and the Promise Institute for Human Rights at UCLA School of Law, June 2021);

    3.1.13. (Module -- Extractive Industries) Be an individual or entity, or a representative, agent, affiliate, successor, attorney, or assign of an individual or entity, that engages in fossil fuel or mineral exploration, extraction, development, or sale;

    3.1.14. (Module -- BDS) Be an individual or entity, or a representative, agent, affiliate, successor, attorney, or assign of an individual or entity, identified by the Boycott, Divestment, Sanctions ("BDS") movement on its website ([https://bdsmovement.net/](https://bdsmovement.net/) and [https://bdsmovement.net/get-involved/what-to-boycott](https://bdsmovement.net/get-involved/what-to-boycott)) as a target for boycott;

    3.1.15. (Module -- Taliban) Be an individual or entity that:

      3.1.15.1.  engages in any commercial transactions with the Taliban; or

      3.1.15.2.  is a representative, agent, affiliate, successor, attorney, or assign of the Taliban;

    3.1.16. (Module -- Myanmar) Be an individual or entity that:

      3.1.16.1.  engages in any commercial transactions with the Myanmar/Burmese military junta; or

      3.1.16.2.  is a representative, agent, affiliate, successor, attorney, or assign of the Myanmar/Burmese government;

    3.1.17. (Module -- Xinjiang Uygur Autonomous Region) Be an individual or entity, or a representative, agent, affiliate, successor, attorney, or assign of any individual or entity, that does business in, purchases goods from, or otherwise benefits from goods produced in the Xinjiang Uygur Autonomous Region of China;

    3.1.18. (Module -- U.S. Tariff Act) Be an individual or entity:

      3.1.18.1.  which U.S. Customs and Border Protection (CBP) has currently issued a Withhold Release Order (WRO) or finding against based on reasonable suspicion of forced labor; or

      3.1.18.2.  that is a representative, agent, affiliate, successor, attorney, or assign of an individual or entity that does business with an individual or entity which currently has a WRO or finding from CBP issued against it based on reasonable suspicion of forced labor;

    3.1.19. (Module -- Mass Surveillance) Be a government agency or multinational corporation, or a representative, agent, affiliate, successor, attorney, or assign of a government or multinational corporation, which participates in mass surveillance programs;

    3.1.20. (Module -- Military Activities) Be an entity or a representative, agent, affiliate, successor, attorney, or assign of an entity which conducts military activities;

    3.1.21. (Module -- Law Enforcement) Be an individual or entity, or a or a representative, agent, affiliate, successor, attorney, or assign of an individual or entity, that provides good or services to, or otherwise enters into any commercial contracts with, any local, state, or federal law enforcement agency;

    3.1.22. (Module -- Media) Be an individual or entity, or a or a representative, agent, affiliate, successor, attorney, or assign of an individual or entity, that broadcasts messages promoting killing, torture, or other forms of extreme violence;

    3.1.23. Interfere with Workers' free exercise of the right to organize and associate
    (See Article 20, United Nations Universal Declaration of Human Rights; C087 - Freedom of Association and Protection of the Right to Organise Convention, 1948 (No. 87), International Labour Organization; Article 8, International Covenant on Economic, Social and Cultural Rights); and

    3.1.24. Harm the environment in a manner inconsistent with local, state, national, or international law.

  3.2.  The Licensee SHALL:

    3.2.1.  (Module -- Social Auditing) Only use social auditing mechanisms that adhere to Worker-Driven Social Responsibility Network's Statement of Principles (https://wsr-network.org/what-is-wsr/statement-of-principles/) over traditional social auditing mechanisms, to the extent the Licensee uses any social auditing mechanisms at all;

    3.2.2.  (Module -- Workers on Board of Directors) Ensure that if the Licensee has a Board of Directors, 30% of Licensee's board seats are held by Workers paid no more than 200% of the compensation of the lowest paid Worker of the Licensee;

    3.2.3.  (Module -- Supply Chain Transparency) Provide clear, accessible supply chain data to the public in accordance with the following conditions:

      3.2.3.1.  All data will be on Licensee's website and/or, to the extent Licensee is a representative, agent, affiliate, successor, attorney, subsidiary, or assign, on Licensee's principal's or parent's website or some other online platform accessible to the public via an internet search on a common internet search engine; and

      3.2.3.2.  Data published will include, where applicable, manufacturers, top tier suppliers, subcontractors, cooperatives, component parts producers, and farms;

    3.2.4.  Provide equal pay for equal work where the performance of such work requires equal skill, effort, and responsibility, and which are performed under similar working conditions, except where such payment is made pursuant to:

      3.2.4.1.  A seniority system;

      3.2.4.2.  A merit system;

      3.2.4.3.  A system which measures earnings by quantity or quality of production; or

      3.2.4.4.  A differential based on any other factor other than sex, gender, sexual orientation, race, ethnicity, nationality, religion, caste, age, medical disability or impairment, and/or any other like circumstances
      (See 29 U.S.C.A. � 206(d)(1); Article 23, *United Nations Universal Declaration of Human Rights*; Article 7, *International Covenant on Economic, Social and Cultural Rights*; Article 26, *International Covenant on Civil and Political Rights*); and

    3.2.5.  Allow for reasonable limitation of working hours and periodic holidays with pay
    (See Article 24, *United Nations Universal Declaration of Human Rights*; Article 7, *International Covenant on Economic, Social and Cultural Rights*).

4.  **SUPPLY CHAIN IMPACTED PARTIES:**

  *This section identifies additional individuals or entities that a Licensee could harm as a result of violating the Ethical Standards section, the condition that the Licensee must voluntarily accept a Duty of Care for those individuals or entities, and the right to a private right of action that those individuals or entities possess as a result of violations of the Ethical Standards section.*

    4.1.  In addition to the above Ethical Standards, Licensee voluntarily accepts a Duty of Care for Supply Chain Impacted Parties of this License, including individuals and communities impacted by violations of the Ethical Standards. The Duty of Care is breached when a provision within the Ethical Standards section is violated by a Licensee, one of its successors or assigns, or by an individual or entity that exists within the Supply Chain prior to a good or service reaching the Licensee.

    4.2.  Breaches of the Duty of Care, as stated within this section, shall create a private right of action, allowing any Supply Chain Impacted Party harmed by the Licensee to take legal action against the Licensee in accordance with applicable negligence laws, whether they be in tort law, delict law, and/or similar bodies of law closely related to tort and/or delict law, regardless if Licensee is directly responsible for the harms suffered by a Supply Chain Impacted Party. Nothing in this section shall be interpreted to include acts committed by individuals outside of the scope of his/her/their employment.

5.  **NOTICE:**
  *This section explains when a Licensee must notify others of the License.*

  5.1.  *Distribution of Notice*: Licensee must ensure that everyone who receives a copy of or uses any part of Software from Licensee, with or without changes, also receives the License and the copyright notice included with Software (and if included by the Licensor, patent, trademark, and attribution notice). Licensee must ensure that License is prominently displayed so that any individual or entity seeking to download, copy, use, or otherwise receive any part of Software from Licensee is notified of this License and its terms and conditions. Licensee must cause any modified versions of the Software to carry prominent notices stating that Licensee changed the Software.

  5.2.  *Modified Software*: Licensee is free to create modifications of the Software and distribute only the modified portion created by Licensee, however, any derivative work stemming from the Software or its code must be distributed pursuant to this License, including this Notice provision.

  5.3.  *Recipients as Licensees*: Any individual or entity that uses, copies, modifies, reproduces, distributes, or prepares derivative work based upon the Software, all or part of the Software's code, or a derivative work developed by using the Software, including a portion of its code, is a Licensee as defined above and is subject to the terms and conditions of this License.

6.  **REPRESENTATIONS AND WARRANTIES:**

  6.1.  *Disclaimer of Warranty*: TO THE FULL EXTENT ALLOWED BY LAW, THIS SOFTWARE COMES "AS IS," WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, AND LICENSOR SHALL NOT BE LIABLE TO ANY PERSON OR ENTITY FOR ANY DAMAGES OR OTHER LIABILITY ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THIS LICENSE, UNDER ANY LEGAL CLAIM.

  6.2.  *Limitation of Liability*: LICENSEE SHALL HOLD LICENSOR HARMLESS AGAINST ANY AND ALL CLAIMS, DEBTS, DUES, LIABILITIES, LIENS, CAUSES OF ACTION, DEMANDS, OBLIGATIONS, DISPUTES, DAMAGES, LOSSES, EXPENSES, ATTORNEYS' FEES, COSTS, LIABILITIES, AND ALL OTHER CLAIMS OF EVERY KIND AND NATURE WHATSOEVER, WHETHER KNOWN OR UNKNOWN, ANTICIPATED OR UNANTICIPATED, FORESEEN OR UNFORESEEN, ACCRUED OR UNACCRUED, DISCLOSED OR UNDISCLOSED, ARISING OUT OF OR RELATING TO LICENSEE'S USE OF THE SOFTWARE. NOTHING IN THIS SECTION SHOULD BE INTERPRETED TO REQUIRE LICENSEE TO INDEMNIFY LICENSOR, NOR REQUIRE LICENSOR TO INDEMNIFY LICENSEE.

7.  **TERMINATION**

  7.1.  *Violations of Ethical Standards or Breaching Duty of Care*: If Licensee violates the Ethical Standards section or Licensee, or any other person or entity within the Supply Chain prior to a good or service reaching the Licensee, breaches its Duty of Care to Supply Chain Impacted Parties, Licensee must remedy the violation or harm caused by Licensee within 30 days of being notified of the violation or harm. If Licensee fails to remedy the violation or harm within 30 days, all rights in the Software granted to Licensee by License will be null and void as between Licensor and Licensee.

  7.2.  *Failure of Notice*: If any person or entity notifies Licensee in writing that Licensee has not complied with the Notice section of this License, Licensee can keep this License by taking all practical steps to comply within 30 days after the notice of noncompliance. If Licensee does not do so, Licensee's License (and all rights licensed hereunder) will end immediately.

  7.3.  *Judicial Findings*: In the event Licensee is found by a civil, criminal, administrative, or other court of competent jurisdiction, or some other adjudicating body with legal authority, to have committed actions which are in violation of the Ethical Standards or Supply Chain Impacted Party sections of this License, all rights granted to Licensee by this License will terminate immediately.

  7.4.  *Patent Litigation*: If Licensee institutes patent litigation against any entity (including a cross-claim or counterclaim in a suit) alleging that the Software, all or part of the Software's code, or a derivative work developed using the Software, including a portion of its code, constitutes direct or contributory patent infringement, then any patent license, along with all other rights, granted to Licensee under this License will terminate as of the date such litigation is filed.

  7.5.  *Additional Remedies*: Termination of the License by failing to remedy harms in no way prevents Licensor or Supply Chain Impacted Party from seeking appropriate remedies at law or in equity.

8.  **MISCELLANEOUS:**

  8.1.  *Conditions*: Sections 3, 4.1, 5.1, 5.2, 7.1, 7.2, 7.3, and 7.4 are conditions of the rights granted to Licensee in the License.

  8.2.  *Equitable Relief*: Licensor and any Supply Chain Impacted Party shall be entitled to equitable relief, including injunctive relief or specific performance of the terms hereof, in addition to any other remedy to which they are entitled at law or in equity.

  8.3.  (Module -- Copyleft) *Copyleft*: Modified software, source code, or other derivative work must be licensed, in its entirety, under the exact same conditions as this License.

  8.4.  *Severability*: If any term or provision of this License is determined to be invalid, illegal, or unenforceable by a court of competent jurisdiction, any such determination of invalidity, illegality, or unenforceability shall not affect any other term or provision of this License or invalidate or render unenforceable such term or provision in any other jurisdiction. If the determination of invalidity, illegality, or unenforceability by a court of competent jurisdiction pertains to the terms or provisions contained in the Ethical Standards section of this License, all rights in the Software granted to Licensee shall be deemed null and void as between Licensor and Licensee.

  8.5.  *Section Titles*: Section titles are solely written for organizational purposes and should not be used to interpret the language within each section.

  8.6.  *Citations*: Citations are solely written to provide context for the source of the provisions in the Ethical Standards.

  8.7.  *Section Summaries*: Some sections have a brief *italicized description* which is provided for the sole purpose of briefly describing the section and should not be used to interpret the terms of the License.

  8.8.  *Entire License*: This is the entire License between the Licensor and Licensee with respect to the claims released herein and that the consideration stated herein is the only consideration or compensation to be paid or exchanged between them for this License. This License cannot be modified or amended except in a writing signed by Licensor and Licensee.

  8.9.  *Successors and Assigns*: This License shall be binding upon and inure to the benefit of the Licensor's and Licensee's respective heirs, successors, and assigns.

    `;
  }
  else if (license === 'IBM Public License Version 1.0') {
    return `
THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

1. DEFINITIONS
"Contribution" means:

in the case of International Business Machines Corporation ("IBM"), the Original Program, and
in the case of each Contributor,
changes to the Program, and
additions to the Program;
where such changes and/or additions to the Program originate from and are distributed by that particular Contributor. A Contribution 'originates' from a Contributor if it was added to the Program by such Contributor itself or anyone acting on such Contributor's behalf. Contributions do not include additions to the Program which: (i) are separate modules of software distributed in conjunction with the Program under their own license agreement, and (ii) are not derivative works of the Program.
"Contributor" means IBM and any other entity that distributes the Program.

"Licensed Patents " mean patent claims licensable by a Contributor which are necessarily infringed by the use or sale of its Contribution alone or when combined with the Program.

"Original Program" means the original version of the software accompanying this Agreement as released by IBM, including source code, object code and documentation, if any.

"Program" means the Original Program and Contributions.

"Recipient" means anyone who receives the Program under this Agreement, including all Contributors.

2. GRANT OF RIGHTS
Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, distribute and sublicense the Contribution of such Contributor, if any, and such derivative works, in source code and object code form.
Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free patent license under Licensed Patents to make, use, sell, offer to sell, import and otherwise transfer the Contribution of such Contributor, if any, in source code and object code form. This patent license shall apply to the combination of the Contribution and the Program if, at the time the Contribution is added by the Contributor, such addition of the Contribution causes such combination to be covered by the Licensed Patents. The patent license shall not apply to any other combinations which include the Contribution. No hardware per se is licensed hereunder.
Recipient understands that although each Contributor grants the licenses to its Contributions set forth herein, no assurances are provided by any Contributor that the Program does not infringe the patent or other intellectual property rights of any other entity. Each Contributor disclaims any liability to Recipient for claims brought by any other entity based on infringement of intellectual property rights or otherwise. As a condition to exercising the rights and licenses granted hereunder, each Recipient hereby assumes sole responsibility to secure any other intellectual property rights needed, if any. For example, if a third party patent license is required to allow Recipient to distribute the Program, it is Recipient's responsibility to acquire that license before distributing the Program.
Each Contributor represents that to its knowledge it has sufficient copyright rights in its Contribution, if any, to grant the copyright license set forth in this Agreement.
3. REQUIREMENTS
A Contributor may choose to distribute the Program in object code form under its own license agreement, provided that:

it complies with the terms and conditions of this Agreement; and
its license agreement:
effectively disclaims on behalf of all Contributors all warranties and conditions, express and implied, including warranties or conditions of title and non-infringement, and implied warranties or conditions of merchantability and fitness for a particular purpose;
effectively excludes on behalf of all Contributors all liability for damages, including direct, indirect, special, incidental and consequential damages, such as lost profits;
states that any provisions which differ from this Agreement are offered by that Contributor alone and not by any other party; and
states that source code for the Program is available from such Contributor, and informs licensees how to obtain it in a reasonable manner on or through a medium customarily used for software exchange.
When the Program is made available in source code form:

it must be made available under this Agreement; and
a copy of this Agreement must be included with each copy of the Program.
Each Contributor must include the following in a conspicuous location in the Program:

Copyright (C) 1996, 1999 International Business Machines Corporation and others. All Rights Reserved.
In addition, each Contributor must identify itself as the originator of its Contribution, if any, in a manner that reasonably allows subsequent Recipients to identify the originator of the Contribution.

4. COMMERCIAL DISTRIBUTION
Commercial distributors of software may accept certain responsibilities with respect to end users, business partners and the like. While this license is intended to facilitate the commercial use of the Program, the Contributor who includes the Program in a commercial product offering should do so in a manner which does not create potential liability for other Contributors. Therefore, if a Contributor includes the Program in a commercial product offering, such Contributor ("Commercial Contributor") hereby agrees to defend and indemnify every other Contributor ("Indemnified Contributor") against any losses, damages and costs (collectively "Losses") arising from claims, lawsuits and other legal actions brought by a third party against the Indemnified Contributor to the extent caused by the acts or omissions of such Commercial Contributor in connection with its distribution of the Program in a commercial product offering. The obligations in this section do not apply to any claims or Losses relating to any actual or alleged intellectual property infringement. In order to qualify, an Indemnified Contributor must: a) promptly notify the Commercial Contributor in writing of such claim, and b) allow the Commercial Contributor to control, and cooperate with the Commercial Contributor in, the defense and any related settlement negotiations. The Indemnified Contributor may participate in any such claim at its own expense.

For example, a Contributor might include the Program in a commercial product offering, Product X. That Contributor is then a Commercial Contributor. If that Commercial Contributor then makes performance claims, or offers warranties related to Product X, those performance claims and warranties are such Commercial Contributor's responsibility alone. Under this section, the Commercial Contributor would have to defend claims against the other Contributors related to those performance claims and warranties, and if a court requires any other Contributor to pay any damages as a result, the Commercial Contributor must pay those damages.

5. NO WARRANTY
EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE PROGRAM IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Each Recipient is solely responsible for determining the appropriateness of using and distributing the Program and assumes all risks associated with its exercise of rights under this Agreement, including but not limited to the risks and costs of program errors, compliance with applicable laws, damage to or loss of data, programs or equipment, and unavailability or interruption of operations.

6. DISCLAIMER OF LIABILITY
EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER RECIPIENT NOR ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

7. GENERAL
If any provision of this Agreement is invalid or unenforceable under applicable law, it shall not affect the validity or enforceability of the remainder of the terms of this Agreement, and without further action by the parties hereto, such provision shall be reformed to the minimum extent necessary to make such provision valid and enforceable.

If Recipient institutes patent litigation against a Contributor with respect to a patent applicable to software (including a cross-claim or counterclaim in a lawsuit), then any patent licenses granted by that Contributor to such Recipient under this Agreement shall terminate as of the date such litigation is filed. In addition, if Recipient institutes patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Program itself (excluding combinations of the Program with other software or hardware) infringes such Recipient's patent(s), then such Recipient's rights granted under Section 2(b) shall terminate as of the date such litigation is filed.

All Recipient's rights under this Agreement shall terminate if it fails to comply with any of the material terms or conditions of this Agreement and does not cure such failure in a reasonable period of time after becoming aware of such noncompliance. If all Recipient's rights under this Agreement terminate, Recipient agrees to cease use and distribution of the Program as soon as reasonably practicable. However, Recipient's obligations under this Agreement and any licenses granted by Recipient relating to the Program shall continue and survive.

IBM may publish new versions (including revisions) of this Agreement from time to time. Each new version of the Agreement will be given a distinguishing version number. The Program (including Contributions) may always be distributed subject to the version of the Agreement under which it was received. In addition, after a new version of the Agreement is published, Contributor may elect to distribute the Program (including its Contributions) under the new version. No one other than IBM has the right to modify this Agreement. Except as expressly stated in Sections 2(a) and 2(b) above, Recipient receives no rights or licenses to the intellectual property of any Contributor under this Agreement, whether expressly, by implication, estoppel or otherwise. All rights in the Program not expressly granted under this Agreement are reserved.

This Agreement is governed by the laws of the State of New York and the intellectual property laws of the United States of America. No party to this Agreement will bring a legal action under this Agreement more than one year after the cause of action arose. Each party waives its rights to a jury trial in any resulting litigation.
    `;
  }
  else if (license === 'ISC License') {
    return `
    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    `;
  }
  else if (license === 'MIT License') {
    return `
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `
1. Definitions

1.1. “Contributor”
means each individual or legal entity that creates, contributes to the creation of, or owns Covered Software.

1.2. “Contributor Version”
means the combination of the Contributions of others (if any) used by a Contributor and that particular Contributor’s Contribution.

1.3. “Contribution”
means Covered Software of a particular Contributor.

1.4. “Covered Software”
means Source Code Form to which the initial Contributor has attached the notice in Exhibit A, the Executable Form of such Source Code Form, and Modifications of such Source Code Form, in each case including portions thereof.

1.5. “Incompatible With Secondary Licenses”
means

that the initial Contributor has attached the notice described in Exhibit B to the Covered Software; or

that the Covered Software was made available under the terms of version 1.1 or earlier of the License, but not also under the terms of a Secondary License.

1.6. “Executable Form”
means any form of the work other than Source Code Form.

1.7. “Larger Work”
means a work that combines Covered Software with other material, in a separate file or files, that is not Covered Software.

1.8. “License”
means this document.

1.9. “Licensable”
means having the right to grant, to the maximum extent possible, whether at the time of the initial grant or subsequently, any and all of the rights conveyed by this License.

1.10. “Modifications”
means any of the following:

any file in Source Code Form that results from an addition to, deletion from, or modification of the contents of Covered Software; or

any new file in Source Code Form that contains any Covered Software.

1.11. “Patent Claims” of a Contributor
means any patent claim(s), including without limitation, method, process, and apparatus claims, in any patent Licensable by such Contributor that would be infringed, but for the grant of the License, by the making, using, selling, offering for sale, having made, import, or transfer of either its Contributions or its Contributor Version.

1.12. “Secondary License”
means either the GNU General Public License, Version 2.0, the GNU Lesser General Public License, Version 2.1, the GNU Affero General Public License, Version 3.0, or any later versions of those licenses.

1.13. “Source Code Form”
means the form of the work preferred for making modifications.

1.14. “You” (or “Your”)
means an individual or a legal entity exercising rights under this License. For legal entities, “You” includes any entity that controls, is controlled by, or is under common control with You. For purposes of this definition, “control” means (a) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (b) ownership of more than fifty percent (50%) of the outstanding shares or beneficial ownership of such entity.

2. License Grants and Conditions
2.1. Grants
Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license:

under intellectual property rights (other than patent or trademark) Licensable by such Contributor to use, reproduce, make available, modify, display, perform, distribute, and otherwise exploit its Contributions, either on an unmodified basis, with Modifications, or as part of a Larger Work; and

under Patent Claims of such Contributor to make, use, sell, offer for sale, have made, import, and otherwise transfer either its Contributions or its Contributor Version.

2.2. Effective Date
The licenses granted in Section 2.1 with respect to any Contribution become effective for each Contribution on the date the Contributor first distributes such Contribution.

2.3. Limitations on Grant Scope
The licenses granted in this Section 2 are the only rights granted under this License. No additional rights or licenses will be implied from the distribution or licensing of Covered Software under this License. Notwithstanding Section 2.1(b) above, no patent license is granted by a Contributor:

for any code that a Contributor has removed from Covered Software; or

for infringements caused by: (i) Your and any other third party’s modifications of Covered Software, or (ii) the combination of its Contributions with other software (except as part of its Contributor Version); or

under Patent Claims infringed by Covered Software in the absence of its Contributions.

This License does not grant any rights in the trademarks, service marks, or logos of any Contributor (except as may be necessary to comply with the notice requirements in Section 3.4).

2.4. Subsequent Licenses
No Contributor makes additional grants as a result of Your choice to distribute the Covered Software under a subsequent version of this License (see Section 10.2) or under the terms of a Secondary License (if permitted under the terms of Section 3.3).

2.5. Representation
Each Contributor represents that the Contributor believes its Contributions are its original creation(s) or it has sufficient rights to grant the rights to its Contributions conveyed by this License.

2.6. Fair Use
This License is not intended to limit any rights You have under applicable copyright doctrines of fair use, fair dealing, or other equivalents.

2.7. Conditions
Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted in Section 2.1.

3. Responsibilities
3.1. Distribution of Source Form
All distribution of Covered Software in Source Code Form, including any Modifications that You create or to which You contribute, must be under the terms of this License. You must inform recipients that the Source Code Form of the Covered Software is governed by the terms of this License, and how they can obtain a copy of this License. You may not attempt to alter or restrict the recipients’ rights in the Source Code Form.

3.2. Distribution of Executable Form
If You distribute Covered Software in Executable Form then:

such Covered Software must also be made available in Source Code Form, as described in Section 3.1, and You must inform recipients of the Executable Form how they can obtain a copy of such Source Code Form by reasonable means in a timely manner, at a charge no more than the cost of distribution to the recipient; and

You may distribute such Executable Form under the terms of this License, or sublicense it under different terms, provided that the license for the Executable Form does not attempt to limit or alter the recipients’ rights in the Source Code Form under this License.

3.3. Distribution of a Larger Work
You may create and distribute a Larger Work under terms of Your choice, provided that You also comply with the requirements of this License for the Covered Software. If the Larger Work is a combination of Covered Software with a work governed by one or more Secondary Licenses, and the Covered Software is not Incompatible With Secondary Licenses, this License permits You to additionally distribute such Covered Software under the terms of such Secondary License(s), so that the recipient of the Larger Work may, at their option, further distribute the Covered Software under the terms of either this License or such Secondary License(s).

3.4. Notices
You may not remove or alter the substance of any license notices (including copyright notices, patent notices, disclaimers of warranty, or limitations of liability) contained within the Source Code Form of the Covered Software, except that You may alter any license notices to the extent required to remedy known factual inaccuracies.

3.5. Application of Additional Terms
You may choose to offer, and to charge a fee for, warranty, support, indemnity or liability obligations to one or more recipients of Covered Software. However, You may do so only on Your own behalf, and not on behalf of any Contributor. You must make it absolutely clear that any such warranty, support, indemnity, or liability obligation is offered by You alone, and You hereby agree to indemnify every Contributor for any liability incurred by such Contributor as a result of warranty, support, indemnity or liability terms You offer. You may include additional disclaimers of warranty and limitations of liability specific to any jurisdiction.

4. Inability to Comply Due to Statute or Regulation
If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Covered Software due to statute, judicial order, or regulation then You must: (a) comply with the terms of this License to the maximum extent possible; and (b) describe the limitations and the code they affect. Such description must be placed in a text file included with all distributions of the Covered Software under this License. Except to the extent prohibited by statute or regulation, such description must be sufficiently detailed for a recipient of ordinary skill to be able to understand it.

5. Termination
5.1. The rights granted under this License will terminate automatically if You fail to comply with any of its terms. However, if You become compliant, then the rights granted under this License from a particular Contributor are reinstated (a) provisionally, unless and until such Contributor explicitly and finally terminates Your grants, and (b) on an ongoing basis, if such Contributor fails to notify You of the non-compliance by some reasonable means prior to 60 days after You have come back into compliance. Moreover, Your grants from a particular Contributor are reinstated on an ongoing basis if such Contributor notifies You of the non-compliance by some reasonable means, this is the first time You have received notice of non-compliance with this License from such Contributor, and You become compliant prior to 30 days after Your receipt of the notice.

5.2. If You initiate litigation against any entity by asserting a patent infringement claim (excluding declaratory judgment actions, counter-claims, and cross-claims) alleging that a Contributor Version directly or indirectly infringes any patent, then the rights granted to You by any and all Contributors for the Covered Software under Section 2.1 of this License shall terminate.

5.3. In the event of termination under Sections 5.1 or 5.2 above, all end user license agreements (excluding distributors and resellers) which have been validly granted by You or Your distributors under this License prior to termination shall survive termination.

6. Disclaimer of Warranty
Covered Software is provided under this License on an “as is” basis, without warranty of any kind, either expressed, implied, or statutory, including, without limitation, warranties that the Covered Software is free of defects, merchantable, fit for a particular purpose or non-infringing. The entire risk as to the quality and performance of the Covered Software is with You. Should any Covered Software prove defective in any respect, You (not any Contributor) assume the cost of any necessary servicing, repair, or correction. This disclaimer of warranty constitutes an essential part of this License. No use of any Covered Software is authorized under this License except under this disclaimer.

7. Limitation of Liability
Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party’s negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.

8. Litigation
Any litigation relating to this License may be brought only in the courts of a jurisdiction where the defendant maintains its principal place of business and such litigation shall be governed by laws of that jurisdiction, without reference to its conflict-of-law provisions. Nothing in this Section shall prevent a party’s ability to bring cross-claims or counter-claims.

9. Miscellaneous
This License represents the complete agreement concerning the subject matter hereof. If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable. Any law or regulation which provides that the language of a contract shall be construed against the drafter shall not be used to construe this License against a Contributor.

10. Versions of the License
10.1. New Versions
Mozilla Foundation is the license steward. Except as provided in Section 10.3, no one other than the license steward has the right to modify or publish new versions of this License. Each version will be given a distinguishing version number.

10.2. Effect of New Versions
You may distribute the Covered Software under the terms of the version of the License under which You originally received the Covered Software, or under the terms of any subsequent version published by the license steward.

10.3. Modified Versions
If you create software not governed by this License, and you want to create a new license for such software, you may create and use a modified version of this License if you rename the license and remove any references to the name of the license steward (except to note that such modified license differs from this License).

10.4. Distributing Source Code Form that is Incompatible With Secondary Licenses
If You choose to distribute Source Code Form that is Incompatible With Secondary Licenses under the terms of this version of the License, the notice described in Exhibit B of this License must be attached.
    `;
  }
  else if (license === 'Attribution License') {
    return `
    (1.0 DEFINITIONS OF CAPITALISED WORDS
      “Collective Database” – Means this Database in unmodified form as part of a collection of independent databases in themselves that together are assembled into a collective whole. A work that constitutes a Collective Database will not be considered a Derivative Database.
      
      “Convey” – As a verb, means Using the Database, a Derivative Database, or the Database as part of a Collective Database in any way that enables a Person to make or receive copies of the Database or a Derivative Database. Conveying does not include interaction with a user through a computer network, or creating and Using a Produced Work, where no transfer of a copy of the Database or a Derivative Database occurs.
      
      “Contents” – The contents of this Database, which includes the information, independent works, or other material collected into the Database. For example, the contents of the Database could be factual data or works such as images, audiovisual material, text, or sounds.
      
      “Database” – A collection of material (the Contents) arranged in a systematic or methodical way and individually accessible by electronic or other means offered under the terms of this License.
      
      “Database Directive” – Means Directive 96/9/EC of the European Parliament and of the Council of 11 March 1996 on the legal protection of databases, as amended or succeeded.
      
      “Database Right” – Means rights resulting from the Chapter III (“sui generis”) rights in the Database Directive (as amended and as transposed by member states), which includes the Extraction and Re-utilisation of the whole or a Substantial part of the Contents, as well as any similar rights available in the relevant jurisdiction under Section 10.4.
      
      “Derivative Database” – Means a database based upon the Database, and includes any translation, adaptation, arrangement, modification, or any other alteration of the Database or of a Substantial part of the Contents. This includes, but is not limited to, Extracting or Re-utilising the whole or a Substantial part of the Contents in a new Database.
      
      “Extraction” – Means the permanent or temporary transfer of all or a Substantial part of the Contents to another medium by any means or in any form.
      
      “License” – Means this license agreement and is both a license of rights such as copyright and Database Rights and an agreement in contract.
      
      “Licensor” – Means the Person that offers the Database under the terms of this License.
      
      “Person” – Means a natural or legal person or a body of persons corporate or incorporate.
      
      “Produced Work” – a work (such as an image, audiovisual material, text, or sounds) resulting from using the whole or a Substantial part of the Contents (via a search or other query) from this Database, a Derivative Database, or this Database as part of a Collective Database.
      
      “Publicly” – means to Persons other than You or under Your control by either more than 50% ownership or by the power to direct their activities (such as contracting with an independent consultant).
      
      “Re-utilisation” – means any form of making available to the public all or a Substantial part of the Contents by the distribution of copies, by renting, by online or other forms of transmission.
      
      “Substantial” – Means substantial in terms of quantity or quality or a combination of both. The repeated and systematic Extraction or Re-utilisation of insubstantial parts of the Contents may amount to the Extraction or Re-utilisation of a Substantial part of the Contents.
      
      “Use” – As a verb, means doing any act that is restricted by copyright or Database Rights whether in the original medium or any other; and includes without limitation distributing, copying, publicly performing, publicly displaying, and preparing derivative works of the Database, as well as modifying the Database as may be technically necessary to use it in a different mode or format.
      
      “You” – Means a Person exercising rights under this License who has not previously violated the terms of this License with respect to the Database, or who has received express permission from the Licensor to exercise rights under this License despite a previous violation.
      
      Words in the singular include the plural and vice versa.
      
      2.0 WHAT THIS LICENSE COVERS
      2.1. Legal effect of this document. This License is:
      
      a. A license of applicable copyright and neighbouring rights;
      
      b. A license of the Database Right; and
      
      c. An agreement in contract between You and the Licensor.
      
      2.2 Legal rights covered. This License covers the legal rights in the Database, including:
      
      a. Copyright. Any copyright or neighbouring rights in the Database. The copyright licensed includes any individual elements of the Database, but does not cover the copyright over the Contents independent of this Database. See Section 2.4 for details. Copyright law varies between jurisdictions, but is likely to cover: the Database model or schema, which is the structure, arrangement, and organisation of the Database, and can also include the Database tables and table indexes; the data entry and output sheets; and the Field names of Contents stored in the Database;
      
      b. Database Rights. Database Rights only extend to the Extraction and Re-utilisation of the whole or a Substantial part of the Contents. Database Rights can apply even when there is no copyright over the Database. Database Rights can also apply when the Contents are removed from the Database and are selected and arranged in a way that would not infringe any applicable copyright; and
      
      c. Contract. This is an agreement between You and the Licensor for access to the Database. In return you agree to certain conditions of use on this access as outlined in this License.
      
      2.3 Rights not covered.
      
      a. This License does not apply to computer programs used in the making or operation of the Database;
      
      b. This License does not cover any patents over the Contents or the Database; and
      
      c. This License does not cover any trademarks associated with the Database.
      
      2.4 Relationship to Contents in the Database. The individual items of the Contents contained in this Database may be covered by other rights, including copyright, patent, data protection, privacy, or personality rights, and this License does not cover any rights (other than Database Rights or in contract) in individual Contents contained in the Database.
      
      For example, if used on a Database of images (the Contents), this License would not apply to copyright over individual images, which could have their own separate licenses, or one single license covering all of the rights over the images.
      
      3.0 RIGHTS GRANTED
      3.1 Subject to the terms and conditions of this License, the Licensor grants to You a worldwide, royalty-free, non-exclusive, terminable (but only under Section 9) license to Use the Database for the duration of any applicable copyright and Database Rights. These rights explicitly include commercial use, and do not exclude any field of endeavour. To the extent possible in the relevant jurisdiction, these rights may be exercised in all media and formats whether now known or created in the future.
      
      The rights granted cover, for example:
      
      a. Extraction and Re-utilisation of the whole or a Substantial part of the Contents;
      
      b. Creation of Derivative Databases;
      
      c. Creation of Collective Databases;
      
      d. Creation of temporary or permanent reproductions by any means and in any form, in whole or in part, including of any Derivative Databases or as a part of Collective Databases; and
      
      e. Distribution, communication, display, lending, making available, or performance to the public by any means and in any form, in whole or in part, including of any Derivative Database or as a part of Collective Databases.
      
      3.2 Compulsory license schemes. For the avoidance of doubt:
      
      a. Non-waivable compulsory license schemes. In those jurisdictions in which the right to collect royalties through any statutory or compulsory licensing scheme cannot be waived, the Licensor reserves the exclusive right to collect such royalties for any exercise by You of the rights granted under this License;
      
      b. Waivable compulsory license schemes. In those jurisdictions in which the right to collect royalties through any statutory or compulsory licensing scheme can be waived, the Licensor waives the exclusive right to collect such royalties for any exercise by You of the rights granted under this License; and,
      
      c. Voluntary license schemes. The Licensor waives the right to collect royalties, whether individually or, in the event that the Licensor is a member of a collecting society that administers voluntary licensing schemes, via that society, from any exercise by You of the rights granted under this License.
      
      3.3 The right to release the Database under different terms, or to stop distributing or making available the Database, is reserved. Note that this Database may be multiple-licensed, and so You may have the choice of using alternative licenses for this Database. Subject to Section 10.4, all other rights not expressly granted by Licensor are reserved.
      
      4.0 CONDITIONS OF USE
      4.1 The rights granted in Section 3 above are expressly made subject to Your complying with the following conditions of use. These are important conditions of this License, and if You fail to follow them, You will be in material breach of its terms.
      
      4.2 Notices. If You Publicly Convey this Database, any Derivative Database, or the Database as part of a Collective Database, then You must:
      
      a. Do so only under the terms of this License;
      
      b. Include a copy of this License or its Uniform Resource Identifier (URI) with the Database or Derivative Database, including both in the Database or Derivative Database and in any relevant documentation;
      
      c. Keep intact any copyright or Database Right notices and notices that refer to this License; and
      
      d. If it is not possible to put the required notices in a particular file due to its structure, then You must include the notices in a location (such as a relevant directory) where users would be likely to look for it.
      
      4.3 Notice for using output (Contents). Creating and Using a Produced Work does not require the notice in Section 4.2. However, if you Publicly Use a Produced Work, You must include a notice associated with the Produced Work reasonably calculated to make any Person that uses, views, accesses, interacts with, or is otherwise exposed to the Produced Work aware that Content was obtained from the Database, Derivative Database, or the Database as part of a Collective Database, and that it is available under this License.
      
      a. Example notice. The following text will satisfy notice under Section 4.3:
      
      Contains information from DATABASE NAME which is made available
      under the ODC Attribution License.
      DATABASE NAME should be replaced with the name of the Database and a hyperlink to the location of the Database. “ODC Attribution License” should contain a hyperlink to the URI of the text of this License. If hyperlinks are not possible, You should include the plain text of the required URI’s with the above notice.
      
      4.4 Licensing of others. You may not sublicense the Database. Each time You communicate the Database, the whole or Substantial part of the Contents, or any Derivative Database to anyone else in any way, the Licensor offers to the recipient a license to the Database on the same terms and conditions as this License. You are not responsible for enforcing compliance by third parties with this License, but You may enforce any rights that You have over a Derivative Database. You are solely responsible for any modifications of a Derivative Database made by You or another Person at Your direction. You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License.
      
      5.0 MORAL RIGHTS
      5.1 Moral rights. This section covers moral rights, including any rights to be identified as the author of the Database or to object to treatment that would otherwise prejudice the author’s honour and reputation, or any other derogatory treatment:
      
      a. For jurisdictions allowing waiver of moral rights, Licensor waives all moral rights that Licensor may have in the Database to the fullest extent possible by the law of the relevant jurisdiction under Section 10.4;
      
      b. If waiver of moral rights under Section 5.1 a in the relevant jurisdiction is not possible, Licensor agrees not to assert any moral rights over the Database and waives all claims in moral rights to the fullest extent possible by the law of the relevant jurisdiction under Section 10.4; and
      
      c. For jurisdictions not allowing waiver or an agreement not to assert moral rights under Section 5.1 a and b, the author may retain their moral rights over certain aspects of the Database.
      
      Please note that some jurisdictions do not allow for the waiver of moral rights, and so moral rights may still subsist over the Database in some jurisdictions.
      
      6.0 FAIR DEALING, DATABASE EXCEPTIONS, AND OTHER RIGHTS NOT AFFECTED
      6.1 This License does not affect any rights that You or anyone else may independently have under any applicable law to make any use of this Database, including without limitation:
      
      a. Exceptions to the Database Right including: Extraction of Contents from non-electronic Databases for private purposes, Extraction for purposes of illustration for teaching or scientific research, and Extraction or Re-utilisation for public security or an administrative or judicial procedure.
      
      b. Fair dealing, fair use, or any other legally recognised limitation or exception to infringement of copyright or other applicable laws.
      
      6.2 This License does not affect any rights of lawful users to Extract and Re-utilise insubstantial parts of the Contents, evaluated quantitatively or qualitatively, for any purposes whatsoever, including creating a Derivative Database (subject to other rights over the Contents, see Section 2.4). The repeated and systematic Extraction or Re-utilisation of insubstantial parts of the Contents may however amount to the Extraction or Re-utilisation of a Substantial part of the Contents.
      
      7.0 WARRANTIES AND DISCLAIMER
      7.1 The Database is licensed by the Licensor “as is” and without any warranty of any kind, either express, implied, or arising by statute, custom, course of dealing, or trade usage. Licensor specifically disclaims any and all implied warranties or conditions of title, non-infringement, accuracy or completeness, the presence or absence of errors, fitness for a particular purpose, merchantability, or otherwise. Some jurisdictions do not allow the exclusion of implied warranties, so this exclusion may not apply to You.
      
      8.0 LIMITATION OF LIABILITY
      8.1 Subject to any liability that may not be excluded or limited by law, the Licensor is not liable for, and expressly excludes, all liability for loss or damage however and whenever caused to anyone by any use under this License, whether by You or by anyone else, and whether caused by any fault on the part of the Licensor or not. This exclusion of liability includes, but is not limited to, any special, incidental, consequential, punitive, or exemplary damages such as loss of revenue, data, anticipated profits, and lost business. This exclusion applies even if the Licensor has been advised of the possibility of such damages.
      
      8.2 If liability may not be excluded by law, it is limited to actual and direct financial loss to the extent it is caused by proved negligence on the part of the Licensor.
      
      9.0 TERMINATION OF YOUR RIGHTS UNDER THIS LICENSE
      9.1 Any breach by You of the terms and conditions of this License automatically terminates this License with immediate effect and without notice to You. For the avoidance of doubt, Persons who have received the Database, the whole or a Substantial part of the Contents, Derivative Databases, or the Database as part of a Collective Database from You under this License will not have their licenses terminated provided their use is in full compliance with this License or a license granted under Section 4.8 of this License. Sections 1, 2, 7, 8, 9 and 10 will survive any termination of this License.
      
      9.2 If You are not in breach of the terms of this License, the Licensor will not terminate Your rights under it.
      
      9.3 Unless terminated under Section 9.1, this License is granted to You for the duration of applicable rights in the Database.
      
      9.4 Reinstatement of rights. If you cease any breach of the terms and conditions of this License, then your full rights under this License will be reinstated:
      
      a. Provisionally and subject to permanent termination until the 60th day after cessation of breach;
      
      b. Permanently on the 60th day after cessation of breach unless otherwise reasonably notified by the Licensor; or
      
      c. Permanently if reasonably notified by the Licensor of the violation, this is the first time You have received notice of violation of this License from the Licensor, and You cure the violation prior to 30 days after your receipt of the notice.
      
      9.5 Notwithstanding the above, Licensor reserves the right to release the Database under different license terms or to stop distributing or making available the Database. Releasing the Database under different license terms or stopping the distribution of the Database will not withdraw this License (or any other license that has been, or is required to be, granted under the terms of this License), and this License will continue in full force and effect unless terminated as stated above.
      
      10.0 GENERAL
      10.1 If any provision of this License is held to be invalid or unenforceable, that must not affect the validity or enforceability of the remainder of the terms and conditions of this License and each remaining provision of this License shall be valid and enforced to the fullest extent permitted by law.
      
      10.2 This License is the entire agreement between the parties with respect to the rights granted here over the Database. It replaces any earlier understandings, agreements or representations with respect to the Database.
      
      10.3 If You are in breach of the terms of this License, You will not be entitled to rely on the terms of this License or to complain of any breach by the Licensor.
      
      10.4 Choice of law. This License takes effect in and will be governed by the laws of the relevant jurisdiction in which the License terms are sought to be enforced. If the standard suite of rights granted under applicable copyright law and Database Rights in the relevant jurisdiction includes additional rights not granted under this License, these additional rights are granted in this License in order to meet the terms of this License.)
    `;
  }
  else if (license === 'Open Database License') {
    return `
PREAMBLE
The Open Database License (ODbL) is a license agreement intended to allow users to freely share, modify, and use this Database while maintaining this same freedom for others. Many databases are covered by copyright, and therefore this document licenses these rights. Some jurisdictions, mainly in the European Union, have specific rights that cover databases, and so the ODbL addresses these rights, too. Finally, the ODbL is also an agreement in contract for users of this Database to act in certain ways in return for accessing this Database.

Databases can contain a wide variety of types of content (images, audiovisual material, and sounds all in the same database, for example), and so the ODbL only governs the rights over the Database, and not the contents of the Database individually. Licensors should use the ODbL together with another license for the contents, if the contents have a single set of rights that uniformly covers all of the contents. If the contents have multiple sets of different rights, Licensors should describe what rights govern what contents together in the individual record or in some other way that clarifies what rights apply.

Sometimes the contents of a database, or the database itself, can be covered by other rights not addressed here (such as private contracts, trade mark over the name, or privacy rights / data protection rights over information in the contents), and so you are advised that you may have to consult other documents or clear other rights before doing activities not covered by this License.

The Licensor (as defined below)

and

You (as defined below)

agree as follows:

1.0 DEFINITIONS OF CAPITALISED WORDS
“Collective Database” – Means this Database in unmodified form as part of a collection of independent databases in themselves that together are assembled into a collective whole. A work that constitutes a Collective Database will not be considered a Derivative Database.

“Convey” – As a verb, means Using the Database, a Derivative Database, or the Database as part of a Collective Database in any way that enables a Person to make or receive copies of the Database or a Derivative Database. Conveying does not include interaction with a user through a computer network, or creating and Using a Produced Work, where no transfer of a copy of the Database or a Derivative Database occurs. “Contents” – The contents of this Database, which includes the information, independent works, or other material collected into the Database. For example, the contents of the Database could be factual data or works such as images, audiovisual material, text, or sounds.

“Database” – A collection of material (the Contents) arranged in a systematic or methodical way and individually accessible by electronic or other means offered under the terms of this License.

“Database Directive” – Means Directive 96/9/EC of the European Parliament and of the Council of 11 March 1996 on the legal protection of databases, as amended or succeeded.

“Database Right” – Means rights resulting from the Chapter III (“sui generis”) rights in the Database Directive (as amended and as transposed by member states), which includes the Extraction and Re-utilisation of the whole or a Substantial part of the Contents, as well as any similar rights available in the relevant jurisdiction under Section 10.4.

“Derivative Database” – Means a database based upon the Database, and includes any translation, adaptation, arrangement, modification, or any other alteration of the Database or of a Substantial part of the Contents. This includes, but is not limited to, Extracting or Re-utilising the whole or a Substantial part of the Contents in a new Database.

“Extraction” – Means the permanent or temporary transfer of all or a Substantial part of the Contents to another medium by any means or in any form.

“License” – Means this license agreement and is both a license of rights such as copyright and Database Rights and an agreement in contract.

“Licensor” – Means the Person that offers the Database under the terms of this License.

“Person” – Means a natural or legal person or a body of persons corporate or incorporate.

“Produced Work” – a work (such as an image, audiovisual material, text, or sounds) resulting from using the whole or a Substantial part of the Contents (via a search or other query) from this Database, a Derivative Database, or this Database as part of a Collective Database.

“Publicly” – means to Persons other than You or under Your control by either more than 50% ownership or by the power to direct their activities (such as contracting with an independent consultant).

“Re-utilisation” – means any form of making available to the public all or a Substantial part of the Contents by the distribution of copies, by renting, by online or other forms of transmission.

“Substantial” – Means substantial in terms of quantity or quality or a combination of both. The repeated and systematic Extraction or Re-utilisation of insubstantial parts of the Contents may amount to the Extraction or Re-utilisation of a Substantial part of the Contents.

“Use” – As a verb, means doing any act that is restricted by copyright or Database Rights whether in the original medium or any other; and includes without limitation distributing, copying, publicly performing, publicly displaying, and preparing derivative works of the Database, as well as modifying the Database as may be technically necessary to use it in a different mode or format.

“You” – Means a Person exercising rights under this License who has not previously violated the terms of this License with respect to the Database, or who has received express permission from the Licensor to exercise rights under this License despite a previous violation.

Words in the singular include the plural and vice versa.

2.0 WHAT THIS LICENSE COVERS
2.1. Legal effect of this document. This License is:

a. A license of applicable copyright and neighbouring rights;

b. A license of the Database Right; and

c. An agreement in contract between You and the Licensor.

2.2 Legal rights covered. This License covers the legal rights in the Database, including:

a. Copyright. Any copyright or neighbouring rights in the Database. The copyright licensed includes any individual elements of the Database, but does not cover the copyright over the Contents independent of this Database. See Section 2.4 for details. Copyright law varies between jurisdictions, but is likely to cover: the Database model or schema, which is the structure, arrangement, and organisation of the Database, and can also include the Database tables and table indexes; the data entry and output sheets; and the Field names of Contents stored in the Database;

b. Database Rights. Database Rights only extend to the Extraction and Re-utilisation of the whole or a Substantial part of the Contents. Database Rights can apply even when there is no copyright over the Database. Database Rights can also apply when the Contents are removed from the Database and are selected and arranged in a way that would not infringe any applicable copyright; and

c. Contract. This is an agreement between You and the Licensor for access to the Database. In return you agree to certain conditions of use on this access as outlined in this License.

2.3 Rights not covered.

a. This License does not apply to computer programs used in the making or operation of the Database;

b. This License does not cover any patents over the Contents or the Database; and

c. This License does not cover any trademarks associated with the Database.

2.4 Relationship to Contents in the Database. The individual items of the Contents contained in this Database may be covered by other rights, including copyright, patent, data protection, privacy, or personality rights, and this License does not cover any rights (other than Database Rights or in contract) in individual Contents contained in the Database. For example, if used on a Database of images (the Contents), this License would not apply to copyright over individual images, which could have their own separate licenses, or one single license covering all of the rights over the images.

3.0 RIGHTS GRANTED
3.1 Subject to the terms and conditions of this License, the Licensor grants to You a worldwide, royalty-free, non-exclusive, terminable (but only under Section 9) license to Use the Database for the duration of any applicable copyright and Database Rights. These rights explicitly include commercial use, and do not exclude any field of endeavour. To the extent possible in the relevant jurisdiction, these rights may be exercised in all media and formats whether now known or created in the future.

The rights granted cover, for example:

a. Extraction and Re-utilisation of the whole or a Substantial part of the Contents;

b. Creation of Derivative Databases;

c. Creation of Collective Databases;

d. Creation of temporary or permanent reproductions by any means and in any form, in whole or in part, including of any Derivative Databases or as a part of Collective Databases; and

e. Distribution, communication, display, lending, making available, or performance to the public by any means and in any form, in whole or in part, including of any Derivative Database or as a part of Collective Databases.

3.2 Compulsory license schemes. For the avoidance of doubt:

a. Non-waivable compulsory license schemes. In those jurisdictions in which the right to collect royalties through any statutory or compulsory licensing scheme cannot be waived, the Licensor reserves the exclusive right to collect such royalties for any exercise by You of the rights granted under this License;

b. Waivable compulsory license schemes. In those jurisdictions in which the right to collect royalties through any statutory or compulsory licensing scheme can be waived, the Licensor waives the exclusive right to collect such royalties for any exercise by You of the rights granted under this License; and,

c. Voluntary license schemes. The Licensor waives the right to collect royalties, whether individually or, in the event that the Licensor is a member of a collecting society that administers voluntary licensing schemes, via that society, from any exercise by You of the rights granted under this License.

3.3 The right to release the Database under different terms, or to stop distributing or making available the Database, is reserved. Note that this Database may be multiple-licensed, and so You may have the choice of using alternative licenses for this Database. Subject to Section 10.4, all other rights not expressly granted by Licensor are reserved.

4.0 CONDITIONS OF USE
4.1 The rights granted in Section 3 above are expressly made subject to Your complying with the following conditions of use. These are important conditions of this License, and if You fail to follow them, You will be in material breach of its terms.

4.2 Notices. If You Publicly Convey this Database, any Derivative Database, or the Database as part of a Collective Database, then You must:

a. Do so only under the terms of this License or another license permitted under Section 4.4;

b. Include a copy of this License (or, as applicable, a license permitted under Section 4.4) or its Uniform Resource Identifier (URI) with the Database or Derivative Database, including both in the Database or Derivative Database and in any relevant documentation; and

c. Keep intact any copyright or Database Right notices and notices that refer to this License.

d. If it is not possible to put the required notices in a particular file due to its structure, then You must include the notices in a location (such as a relevant directory) where users would be likely to look for it.

4.3 Notice for using output (Contents). Creating and Using a Produced Work does not require the notice in Section 4.2. However, if you Publicly Use a Produced Work, You must include a notice associated with the Produced Work reasonably calculated to make any Person that uses, views, accesses, interacts with, or is otherwise exposed to the Produced Work aware that Content was obtained from the Database, Derivative Database, or the Database as part of a Collective Database, and that it is available under this License.

a. Example notice. The following text will satisfy notice under Section 4.3:

Contains information from DATABASE NAME, which is made available
here under the Open Database License (ODbL).
DATABASE NAME should be replaced with the name of the Database and a hyperlink to the URI of the Database. “Open Database License” should contain a hyperlink to the URI of the text of this License. If hyperlinks are not possible, You should include the plain text of the required URI’s with the above notice.

4.4 Share alike.

a. Any Derivative Database that You Publicly Use must be only under the terms of:

i. This License;

ii. A later version of this License similar in spirit to this License; or

iii. A compatible license.

If You license the Derivative Database under one of the licenses mentioned in (iii), You must comply with the terms of that license.

b. For the avoidance of doubt, Extraction or Re-utilisation of the whole or a Substantial part of the Contents into a new database is a Derivative Database and must comply with Section 4.4.

c. Derivative Databases and Produced Works. A Derivative Database is Publicly Used and so must comply with Section 4.4. if a Produced Work created from the Derivative Database is Publicly Used.

d. Share Alike and additional Contents. For the avoidance of doubt, You must not add Contents to Derivative Databases under Section 4.4 a that are incompatible with the rights granted under this License.

e. Compatible licenses. Licensors may authorise a proxy to determine compatible licenses under Section 4.4 a iii. If they do so, the authorised proxy’s public statement of acceptance of a compatible license grants You permission to use the compatible license.

4.5 Limits of Share Alike. The requirements of Section 4.4 do not apply in the following:

a. For the avoidance of doubt, You are not required to license Collective Databases under this License if You incorporate this Database or a Derivative Database in the collection, but this License still applies to this Database or a Derivative Database as a part of the Collective Database;

b. Using this Database, a Derivative Database, or this Database as part of a Collective Database to create a Produced Work does not create a Derivative Database for purposes of Section 4.4; and

c. Use of a Derivative Database internally within an organisation is not to the public and therefore does not fall under the requirements of Section 4.4.

4.6 Access to Derivative Databases. If You Publicly Use a Derivative Database or a Produced Work from a Derivative Database, You must also offer to recipients of the Derivative Database or Produced Work a copy in a machine readable form of:

a. The entire Derivative Database; or

b. A file containing all of the alterations made to the Database or the method of making the alterations to the Database (such as an algorithm), including any additional Contents, that make up all the differences between the Database and the Derivative Database.

The Derivative Database (under a.) or alteration file (under b.) must be available at no more than a reasonable production cost for physical distributions and free of charge if distributed over the internet.

4.7 Technological measures and additional terms

a. This License does not allow You to impose (except subject to Section 4.7 b.) any terms or any technological measures on the Database, a Derivative Database, or the whole or a Substantial part of the Contents that alter or restrict the terms of this License, or any rights granted under it, or have the effect or intent of restricting the ability of any person to exercise those rights.

b. Parallel distribution. You may impose terms or technological measures on the Database, a Derivative Database, or the whole or a Substantial part of the Contents (a “Restricted Database”) in contravention of Section 4.74 a. only if You also make a copy of the Database or a Derivative Database available to the recipient of the Restricted Database:

i. That is available without additional fee;

ii. That is available in a medium that does not alter or restrict the terms of this License, or any rights granted under it, or have the effect or intent of restricting the ability of any person to exercise those rights (an “Unrestricted Database”); and

iii. The Unrestricted Database is at least as accessible to the recipient as a practical matter as the Restricted Database.

c. For the avoidance of doubt, You may place this Database or a Derivative Database in an authenticated environment, behind a password, or within a similar access control scheme provided that You do not alter or restrict the terms of this License or any rights granted under it or have the effect or intent of restricting the ability of any person to exercise those rights.

4.8 Licensing of others. You may not sublicense the Database. Each time You communicate the Database, the whole or Substantial part of the Contents, or any Derivative Database to anyone else in any way, the Licensor offers to the recipient a license to the Database on the same terms and conditions as this License. You are not responsible for enforcing compliance by third parties with this License, but You may enforce any rights that You have over a Derivative Database. You are solely responsible for any modifications of a Derivative Database made by You or another Person at Your direction. You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License.

5.0 MORAL RIGHTS
5.1 Moral rights. This section covers moral rights, including any rights to be identified as the author of the Database or to object to treatment that would otherwise prejudice the author’s honour and reputation, or any other derogatory treatment:

a. For jurisdictions allowing waiver of moral rights, Licensor waives all moral rights that Licensor may have in the Database to the fullest extent possible by the law of the relevant jurisdiction under Section 10.4;

b. If waiver of moral rights under Section 5.1 a in the relevant jurisdiction is not possible, Licensor agrees not to assert any moral rights over the Database and waives all claims in moral rights to the fullest extent possible by the law of the relevant jurisdiction under Section 10.4; and

c. For jurisdictions not allowing waiver or an agreement not to assert moral rights under Section 5.1 a and b, the author may retain their moral rights over certain aspects of the Database.

Please note that some jurisdictions do not allow for the waiver of moral rights, and so moral rights may still subsist over the Database in some jurisdictions.

6.0 FAIR DEALING, DATABASE EXCEPTIONS, AND OTHER RIGHTS NOT AFFECTED
6.1 This License does not affect any rights that You or anyone else may independently have under any applicable law to make any use of this Database, including without limitation:

a. Exceptions to the Database Right including: Extraction of Contents from non-electronic Databases for private purposes, Extraction for purposes of illustration for teaching or scientific research, and Extraction or Re-utilisation for public security or an administrative or judicial procedure.

b. Fair dealing, fair use, or any other legally recognised limitation or exception to infringement of copyright or other applicable laws.

6.2 This License does not affect any rights of lawful users to Extract and Re-utilise insubstantial parts of the Contents, evaluated quantitatively or qualitatively, for any purposes whatsoever, including creating a Derivative Database (subject to other rights over the Contents, see Section 2.4). The repeated and systematic Extraction or Re-utilisation of insubstantial parts of the Contents may however amount to the Extraction or Re-utilisation of a Substantial part of the Contents.

7.0 WARRANTIES AND DISCLAIMER
7.1 The Database is licensed by the Licensor “as is” and without any warranty of any kind, either express, implied, or arising by statute, custom, course of dealing, or trade usage. Licensor specifically disclaims any and all implied warranties or conditions of title, non-infringement, accuracy or completeness, the presence or absence of errors, fitness for a particular purpose, merchantability, or otherwise. Some jurisdictions do not allow the exclusion of implied warranties, so this exclusion may not apply to You.

8.0 LIMITATION OF LIABILITY
8.1 Subject to any liability that may not be excluded or limited by law, the Licensor is not liable for, and expressly excludes, all liability for loss or damage however and whenever caused to anyone by any use under this License, whether by You or by anyone else, and whether caused by any fault on the part of the Licensor or not. This exclusion of liability includes, but is not limited to, any special, incidental, consequential, punitive, or exemplary damages such as loss of revenue, data, anticipated profits, and lost business. This exclusion applies even if the Licensor has been advised of the possibility of such damages.

8.2 If liability may not be excluded by law, it is limited to actual and direct financial loss to the extent it is caused by proved negligence on the part of the Licensor.

9.0 TERMINATION OF YOUR RIGHTS UNDER THIS LICENSE
9.1 Any breach by You of the terms and conditions of this License automatically terminates this License with immediate effect and without notice to You. For the avoidance of doubt, Persons who have received the Database, the whole or a Substantial part of the Contents, Derivative Databases, or the Database as part of a Collective Database from You under this License will not have their licenses terminated provided their use is in full compliance with this License or a license granted under Section 4.8 of this License. Sections 1, 2, 7, 8, 9 and 10 will survive any termination of this License.

9.2 If You are not in breach of the terms of this License, the Licensor will not terminate Your rights under it.

9.3 Unless terminated under Section 9.1, this License is granted to You for the duration of applicable rights in the Database.

9.4 Reinstatement of rights. If you cease any breach of the terms and conditions of this License, then your full rights under this License will be reinstated:

a. Provisionally and subject to permanent termination until the 60th day after cessation of breach;

b. Permanently on the 60th day after cessation of breach unless otherwise reasonably notified by the Licensor; or

c. Permanently if reasonably notified by the Licensor of the violation, this is the first time You have received notice of violation of this License from the Licensor, and You cure the violation prior to 30 days after your receipt of the notice.

Persons subject to permanent termination of rights are not eligible to be a recipient and receive a license under Section 4.8.

9.5 Notwithstanding the above, Licensor reserves the right to release the Database under different license terms or to stop distributing or making available the Database. Releasing the Database under different license terms or stopping the distribution of the Database will not withdraw this License (or any other license that has been, or is required to be, granted under the terms of this License), and this License will continue in full force and effect unless terminated as stated above.

10.0 GENERAL
10.1 If any provision of this License is held to be invalid or unenforceable, that must not affect the validity or enforceability of the remainder of the terms and conditions of this License and each remaining provision of this License shall be valid and enforced to the fullest extent permitted by law.

10.2 This License is the entire agreement between the parties with respect to the rights granted here over the Database. It replaces any earlier understandings, agreements or representations with respect to the Database.

10.3 If You are in breach of the terms of this License, You will not be entitled to rely on the terms of this License or to complain of any breach by the Licensor.

10.4 Choice of law. This License takes effect in and will be governed by the laws of the relevant jurisdiction in which the License terms are sought to be enforced. If the standard suite of rights granted under applicable copyright law and Database Rights in the relevant jurisdiction includes additional rights not granted under this License, these additional rights are granted in this License in order to meet the terms of this License.
    `;
  }
  else if (license === 'Public Domain Dedication and License') {
    return `
PREAMBLE
The Open Data Commons – Public Domain Dedication and Licence is a document intended to allow you to freely share, modify, and use this work for any purpose and without any restrictions. This licence is intended for use on databases or their contents (“data”), either together or individually.

Many databases are covered by copyright. Some jurisdictions, mainly in Europe, have specific special rights that cover databases called the “sui generis” database right. Both of these sets of rights, as well as other legal rights used to protect databases and data, can create uncertainty or practical difficulty for those wishing to share databases and their underlying data but retain a limited amount of rights under a “some rights reserved” approach to licensing as outlined in the Science Commons Protocol for Implementing Open Access Data. As a result, this waiver and licence tries to the fullest extent possible to eliminate or fully license any rights that cover this database and data. Any Community Norms or similar statements of use of the database or data do not form a part of this document, and do not act as a contract for access or other terms of use for the database or data.

THE POSITION OF THE RECIPIENT OF THE WORK
Because this document places the database and its contents in or as close as possible within the public domain, there are no restrictions or requirements placed on the recipient by this document. Recipients may use this work commercially, use technical protection measures, combine this data or database with other databases or data, and share their changes and additions or keep them secret. It is not a requirement that recipients provide further users with a copy of this licence or attribute the original creator of the data or database as a source. The goal is to eliminate restrictions held by the original creator of the data and database on the use of it by others.

THE POSITION OF THE DEDICATOR OF THE WORK
Copyright law, as with most other law under the banner of “intellectual property”, is inherently national law. This means that there exists several differences in how copyright and other IP rights can be relinquished, waived or licensed in the many legal jurisdictions of the world. This is despite much harmonisation of minimum levels of protection. The internet and other communication technologies span these many disparate legal jurisdictions and thus pose special difficulties for a document relinquishing and waiving intellectual property rights, including copyright and database rights, for use by the global community. Because of this feature of intellectual property law, this document first relinquishes the rights and waives the relevant rights and claims. It then goes on to license these same rights for jurisdictions or areas of law that may make it difficult to relinquish or waive rights or claims.

The purpose of this document is to enable rightsholders to place their work into the public domain. Unlike licences for free and open source software, free cultural works, or open content licences, rightsholders will not be able to “dual license” their work by releasing the same work under different licences. This is because they have allowed anyone to use the work in whatever way they choose. Rightsholders therefore can’t re-license it under copyright or database rights on different terms because they have nothing left to license. Doing so creates truly accessible data to build rich applications and advance the progress of science and the arts.

This document can cover either or both of the database and its contents (the data). Because databases can have a wide variety of content – not just factual data – rightsholders should use the Open Data Commons – Public Domain Dedication & Licence for an entire database and its contents only if everything can be placed under the terms of this document. Because even factual data can sometimes have intellectual property rights, rightsholders should use this licence to cover both the database and its factual data when making material available under this document; even if it is likely that the data would not be covered by copyright or database rights.

Rightsholders can also use this document to cover any copyright or database rights claims over only a database, and leave the contents to be covered by other licences or documents. They can do this because this document refers to the “Work”, which can be either – or both – the database and its contents. As a result, rightsholders need to clearly state what they are dedicating under this document when they dedicate it.

Just like any licence or other document dealing with intellectual property, rightsholders should be aware that one can only license what one owns. Please ensure that the rights have been cleared to make this material available under this document.

This document permanently and irrevocably makes the Work available to the public for any use of any kind, and it should not be used unless the rightsholder is prepared for this to happen.

PART I: INTRODUCTION
The Rightsholder (the Person holding rights or claims over the Work) agrees as follows:

1.0 DEFINITIONS OF CAPITALISED WORDS
“Copyright” – Includes rights under copyright and under neighbouring rights and similarly related sets of rights under the law of the relevant jurisdiction under Section 6.4.

“Data” – The contents of the Database, which includes the information, independent works, or other material collected into the Database offered under the terms of this Document.

“Database” – A collection of Data arranged in a systematic or methodical way and individually accessible by electronic or other means offered under the terms of this Document.

“Database Right” – Means rights over Data resulting from the Chapter III (“sui generis”) rights in the Database Directive (Directive 96/9/EC of the European Parliament and of the Council of 11 March 1996 on the legal protection of databases) and any future updates as well as any similar rights available in the relevant jurisdiction under Section 6.4.

“Document” – means this relinquishment and waiver of rights and claims and back up licence agreement.

“Person” – Means a natural or legal person or a body of persons corporate or incorporate.

“Use” – As a verb, means doing any act that is restricted by Copyright or Database Rights whether in the original medium or any other; and includes modifying the Work as may be technically necessary to use it in a different mode or format. This includes the right to sublicense the Work.

“Work” – Means either or both of the Database and Data offered under the terms of this Document.

“You” – the Person acquiring rights under the licence elements of this Document.

Words in the singular include the plural and vice versa.

2.0 WHAT THIS DOCUMENT COVERS
2.1. Legal effect of this Document. This Document is:

a. A dedication to the public domain and waiver of Copyright and Database Rights over the Work; and

b. A licence of Copyright and Database Rights over the Work in jurisdictions that do not allow for relinquishment or waiver.

2.2. Legal rights covered.

a. Copyright. Any copyright or neighbouring rights in the Work. Copyright law varies between jurisdictions, but is likely to cover: the Database model or schema, which is the structure, arrangement, and organisation of the Database, and can also include the Database tables and table indexes; the data entry and output sheets; and the Field names of Data stored in the Database. Copyright may also cover the Data depending on the jurisdiction and type of Data; and

b. Database Rights. Database Rights only extend to the extraction and re-utilisation of the whole or a substantial part of the Data. Database Rights can apply even when there is no copyright over the Database. Database Rights can also apply when the Data is removed from the Database and is selected and arranged in a way that would not infringe any applicable copyright.

2.2 Rights not covered.

a. This Document does not apply to computer programs used in the making or operation of the Database;

b. This Document does not cover any patents over the Data or the Database. Please see Section 4.2 later in this Document for further details; and

c. This Document does not cover any trade marks associated with the Database. Please see Section 4.3 later in this Document for further details.

Users of this Database are cautioned that they may have to clear other rights or consult other licences.

2.3 Facts are free. The Rightsholder takes the position that factual information is not covered by Copyright. This Document however covers the Work in jurisdictions that may protect the factual information in the Work by Copyright, and to cover any information protected by Copyright that is contained in the Work.

PART II: DEDICATION TO THE PUBLIC DOMAIN
3.0 Dedication, waiver, and licence of Copyright and Database Rights

3.1 Dedication of Copyright and Database Rights to the public domain. The Rightsholder by using this Document, dedicates the Work to the public domain for the benefit of the public and relinquishes all rights in Copyright and Database Rights over the Work.

a. The Rightsholder realises that once these rights are relinquished, that the Rightsholder has no further rights in Copyright and Database Rights over the Work, and that the Work is free and open for others to Use.

b. The Rightsholder intends for their relinquishment to cover all present and future rights in the Work under Copyright and Database Rights, whether they are vested or contingent rights, and that this relinquishment of rights covers all their heirs and successors.

The above relinquishment of rights applies worldwide and includes media and formats now known or created in the future.

3.2 Waiver of rights and claims in Copyright and Database Rights when Section 3.1 dedication inapplicable. If the dedication in Section 3.1 does not apply in the relevant jurisdiction under Section 6.4, the Rightsholder waives any rights and claims that the Rightsholder may have or acquire in the future over the Work in:

a. Copyright; and

b. Database Rights.

To the extent possible in the relevant jurisdiction, the above waiver of rights and claims applies worldwide and includes media and formats now known or created in the future. The Rightsholder agrees not to assert the above rights and waives the right to enforce them over the Work.

3.3 Licence of Copyright and Database Rights when Sections 3.1 and 3.2 inapplicable. If the dedication and waiver in Sections 3.1 and 3.2 does not apply in the relevant jurisdiction under Section 6.4, the Rightsholder and You agree as follows:

a. The Licensor grants to You a worldwide, royalty-free, non-exclusive, licence to Use the Work for the duration of any applicable Copyright and Database Rights. These rights explicitly include commercial use, and do not exclude any field of endeavour. To the extent possible in the relevant jurisdiction, these rights may be exercised in all media and formats whether now known or created in the future.

3.4 Moral rights. This section covers moral rights, including the right to be identified as the author of the Work or to object to treatment that would otherwise prejudice the author’s honour and reputation, or any other derogatory treatment:

a. For jurisdictions allowing waiver of moral rights, Licensor waives all moral rights that Licensor may have in the Work to the fullest extent possible by the law of the relevant jurisdiction under Section 6.4;

b. If waiver of moral rights under Section 3.4 a in the relevant jurisdiction is not possible, Licensor agrees not to assert any moral rights over the Work and waives all claims in moral rights to the fullest extent possible by the law of the relevant jurisdiction under Section 6.4; and

c. For jurisdictions not allowing waiver or an agreement not to assert moral rights under Section 3.4 a and b, the author may retain their moral rights over the copyrighted aspects of the Work.

Please note that some jurisdictions do not allow for the waiver of moral rights, and so moral rights may still subsist over the work in some jurisdictions.

4.0 RELATIONSHIP TO OTHER RIGHTS
4.1 No other contractual conditions. The Rightsholder makes this Work available to You without any other contractual obligations, either express or implied. Any Community Norms statement associated with the Work is not a contract and does not form part of this Document.

4.2 Relationship to patents. This Document does not grant You a licence for any patents that the Rightsholder may own. Users of this Database are cautioned that they may have to clear other rights or consult other licences.

4.3 Relationship to trade marks. This Document does not grant You a licence for any trade marks that the Rightsholder may own or that the Rightsholder may use to cover the Work. Users of this Database are cautioned that they may have to clear other rights or consult other licences.

PART III: GENERAL PROVISIONS
5.0 WARRANTIES, DISCLAIMER, AND LIMITATION OF LIABILITY
5.1 The Work is provided by the Rightsholder “as is” and without any warranty of any kind, either express or implied, whether of title, of accuracy or completeness, of the presence of absence of errors, of fitness for purpose, or otherwise. Some jurisdictions do not allow the exclusion of implied warranties, so this exclusion may not apply to You.

5.2 Subject to any liability that may not be excluded or limited by law, the Rightsholder is not liable for, and expressly excludes, all liability for loss or damage however and whenever caused to anyone by any use under this Document, whether by You or by anyone else, and whether caused by any fault on the part of the Rightsholder or not. This exclusion of liability includes, but is not limited to, any special, incidental, consequential, punitive, or exemplary damages. This exclusion applies even if the Rightsholder has been advised of the possibility of such damages.

5.3 If liability may not be excluded by law, it is limited to actual and direct financial loss to the extent it is caused by proved negligence on the part of the Rightsholder.

6.0 GENERAL
6.1 If any provision of this Document is held to be invalid or unenforceable, that must not affect the validity or enforceability of the remainder of the terms of this Document.

6.2 This Document is the entire agreement between the parties with respect to the Work covered here. It replaces any earlier understandings, agreements or representations with respect to the Work not specified here.

6.3 This Document does not affect any rights that You or anyone else may independently have under any applicable law to make any use of this Work, including (for jurisdictions where this Document is a licence) fair dealing, fair use, database exceptions, or any other legally recognised limitation or exception to infringement of copyright or other applicable laws.

6.4 This Document takes effect in the relevant jurisdiction in which the Document terms are sought to be enforced. If the rights waived or granted under applicable law in the relevant jurisdiction includes additional rights not waived or granted under this Document, these additional rights are included in this Document in order to meet the intent of this Document.
    `;
  }
  else if (license === 'Perl License') {
    return `
Preamble
This license establishes the terms under which a given free software Package may be copied, modified, distributed, and/or redistributed. The intent is that the Copyright Holder maintains some artistic control over the development of that Package while still keeping the Package available as open source and free software.

You are always permitted to make arrangements wholly outside of this license directly with the Copyright Holder of a given Package. If the terms of this license do not permit the full use that you propose to make of the Package, you should contact the Copyright Holder and seek a different licensing arrangement.

Definitions
"Copyright Holder" means the individual(s) or organization(s) named in the copyright notice for the entire Package.

"Contributor" means any party that has contributed code or other material to the Package, in accordance with the Copyright Holder's procedures.

"You" and "your" means any person who would like to copy, distribute, or modify the Package.

"Package" means the collection of files distributed by the Copyright Holder, and derivatives of that collection and/or of those files. A given Package may consist of either the Standard Version, or a Modified Version.

"Distribute" means providing a copy of the Package or making it accessible to anyone else, or in the case of a company or organization, to others outside of your company or organization.

"Distributor Fee" means any fee that you charge for Distributing this Package or providing support for this Package to another party. It does not mean licensing fees.

"Standard Version" refers to the Package if it has not been modified, or has been modified only in ways explicitly requested by the Copyright Holder.

"Modified Version" means the Package, if it has been changed, and such changes were not explicitly requested by the Copyright Holder.

"Original License" means this Artistic License as Distributed with the Standard Version of the Package, in its current version or as it may be modified by The Perl Foundation in the future.

"Source" form means the source code, documentation source, and configuration files for the Package.

"Compiled" form means the compiled bytecode, object code, binary, or any other form resulting from mechanical transformation or translation of the Source form.

Permission for Use and Modification Without Distribution
(1) You are permitted to use the Standard Version and create and use Modified Versions for any purpose without restriction, provided that you do not Distribute the Modified Version.

Permissions for Redistribution of the Standard Version
(2) You may Distribute verbatim copies of the Source form of the Standard Version of this Package in any medium without restriction, either gratis or for a Distributor Fee, provided that you duplicate all of the original copyright notices and associated disclaimers. At your discretion, such verbatim copies may or may not include a Compiled form of the Package.

(3) You may apply any bug fixes, portability changes, and other modifications made available from the Copyright Holder. The resulting Package will still be considered the Standard Version, and as such will be subject to the Original License.

Distribution of Modified Versions of the Package as Source
(4) You may Distribute your Modified Version as Source (either gratis or for a Distributor Fee, and with or without a Compiled form of the Modified Version) provided that you clearly document how it differs from the Standard Version, including, but not limited to, documenting any non-standard features, executables, or modules, and provided that you do at least ONE of the following:

(a) make the Modified Version available to the Copyright Holder of the Standard Version, under the Original License, so that the Copyright Holder may include your modifications in the Standard Version.
(b) ensure that installation of your Modified Version does not prevent the user installing or running the Standard Version. In addition, the Modified Version must bear a name that is different from the name of the Standard Version.
(c) allow anyone who receives a copy of the Modified Version to make the Source form of the Modified Version available to others under
(i) the Original License or
(ii) a license that permits the licensee to freely copy, modify and redistribute the Modified Version using the same licensing terms that apply to the copy that the licensee received, and requires that the Source form of the Modified Version, and of any works derived from it, be made freely available in that license fees are prohibited but Distributor Fees are allowed.

Distribution of Compiled Forms of the Standard Version or Modified Versions without the Source
(5) You may Distribute Compiled forms of the Standard Version without the Source, provided that you include complete instructions on how to get the Source of the Standard Version. Such instructions must be valid at the time of your distribution. If these instructions, at any time while you are carrying out such distribution, become invalid, you must provide new instructions on demand or cease further distribution. If you provide valid instructions or cease distribution within thirty days after you become aware that the instructions are invalid, then you do not forfeit any of your rights under this license.

(6) You may Distribute a Modified Version in Compiled form without the Source, provided that you comply with Section 4 with respect to the Source of the Modified Version.

Aggregating or Linking the Package
(7) You may aggregate the Package (either the Standard Version or Modified Version) with other packages and Distribute the resulting aggregation provided that you do not charge a licensing fee for the Package. Distributor Fees are permitted, and licensing fees for other components in the aggregation are permitted. The terms of this license apply to the use and Distribution of the Standard or Modified Versions as included in the aggregation.

(8) You are permitted to link Modified and Standard Versions with other works, to embed the Package in a larger work of your own, or to build stand-alone binary or bytecode versions of applications that include the Package, and Distribute the result without restriction, provided the result does not expose a direct interface to the Package.

Items That are Not Considered Part of a Modified Version
(9) Works (including, but not limited to, modules and scripts) that merely extend or make use of the Package, do not, by themselves, cause the Package to be a Modified Version. In addition, such works are not considered parts of the Package itself, and are not subject to the terms of this license.

General Provisions
(10) Any use, modification, and distribution of the Standard or Modified Versions is governed by this Artistic License. By using, modifying or distributing the Package, you accept this license. Do not use, modify, or distribute the Package, if you do not accept this license.

(11) If your Modified Version has been derived from a Modified Version made by someone other than you, you are nevertheless required to ensure that your Modified Version complies with the requirements of this license.

(12) This license does not grant you the right to use any trademark, service mark, tradename, or logo of the Copyright Holder.

(13) This license includes the non-exclusive, worldwide, free-of-charge patent license to make, have made, use, offer to sell, sell, import and otherwise transfer the Package with respect to any patent claims licensable by the Copyright Holder that are necessarily infringed by the Package. If you institute patent litigation (including a cross-claim or counterclaim) against any party alleging that the Package constitutes direct or contributory patent infringement, then this Artistic License to you shall terminate on the date that such litigation is filed.

(14) Disclaimer of Warranty: THE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS IS' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL LAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    `;
  }
  else if (license === 'Artistic License 2.0') {
    return `
Preamble
This license establishes the terms under which a given free software Package may be copied, modified, distributed, and/or redistributed. The intent is that the Copyright Holder maintains some artistic control over the development of that Package while still keeping the Package available as open source and free software.

You are always permitted to make arrangements wholly outside of this license directly with the Copyright Holder of a given Package. If the terms of this license do not permit the full use that you propose to make of the Package, you should contact the Copyright Holder and seek a different licensing arrangement.

Definitions
"Copyright Holder" means the individual(s) or organization(s) named in the copyright notice for the entire Package.

"Contributor" means any party that has contributed code or other material to the Package, in accordance with the Copyright Holder's procedures.

"You" and "your" means any person who would like to copy, distribute, or modify the Package.

"Package" means the collection of files distributed by the Copyright Holder, and derivatives of that collection and/or of those files. A given Package may consist of either the Standard Version, or a Modified Version.

"Distribute" means providing a copy of the Package or making it accessible to anyone else, or in the case of a company or organization, to others outside of your company or organization.

"Distributor Fee" means any fee that you charge for Distributing this Package or providing support for this Package to another party. It does not mean licensing fees.

"Standard Version" refers to the Package if it has not been modified, or has been modified only in ways explicitly requested by the Copyright Holder.

"Modified Version" means the Package, if it has been changed, and such changes were not explicitly requested by the Copyright Holder.

"Original License" means this Artistic License as Distributed with the Standard Version of the Package, in its current version or as it may be modified by The Perl Foundation in the future.

"Source" form means the source code, documentation source, and configuration files for the Package.

"Compiled" form means the compiled bytecode, object code, binary, or any other form resulting from mechanical transformation or translation of the Source form.

Permission for Use and Modification Without Distribution
(1) You are permitted to use the Standard Version and create and use Modified Versions for any purpose without restriction, provided that you do not Distribute the Modified Version.

Permissions for Redistribution of the Standard Version
(2) You may Distribute verbatim copies of the Source form of the Standard Version of this Package in any medium without restriction, either gratis or for a Distributor Fee, provided that you duplicate all of the original copyright notices and associated disclaimers. At your discretion, such verbatim copies may or may not include a Compiled form of the Package.

(3) You may apply any bug fixes, portability changes, and other modifications made available from the Copyright Holder. The resulting Package will still be considered the Standard Version, and as such will be subject to the Original License.

Distribution of Modified Versions of the Package as Source
(4) You may Distribute your Modified Version as Source (either gratis or for a Distributor Fee, and with or without a Compiled form of the Modified Version) provided that you clearly document how it differs from the Standard Version, including, but not limited to, documenting any non-standard features, executables, or modules, and provided that you do at least ONE of the following:

(a) make the Modified Version available to the Copyright Holder of the Standard Version, under the Original License, so that the Copyright Holder may include your modifications in the Standard Version.
(b) ensure that installation of your Modified Version does not prevent the user installing or running the Standard Version. In addition, the Modified Version must bear a name that is different from the name of the Standard Version.
(c) allow anyone who receives a copy of the Modified Version to make the Source form of the Modified Version available to others under
(i) the Original License or
(ii) a license that permits the licensee to freely copy, modify and redistribute the Modified Version using the same licensing terms that apply to the copy that the licensee received, and requires that the Source form of the Modified Version, and of any works derived from it, be made freely available in that license fees are prohibited but Distributor Fees are allowed.

Distribution of Compiled Forms of the Standard Version or Modified Versions without the Source
(5) You may Distribute Compiled forms of the Standard Version without the Source, provided that you include complete instructions on how to get the Source of the Standard Version. Such instructions must be valid at the time of your distribution. If these instructions, at any time while you are carrying out such distribution, become invalid, you must provide new instructions on demand or cease further distribution. If you provide valid instructions or cease distribution within thirty days after you become aware that the instructions are invalid, then you do not forfeit any of your rights under this license.

(6) You may Distribute a Modified Version in Compiled form without the Source, provided that you comply with Section 4 with respect to the Source of the Modified Version.

Aggregating or Linking the Package
(7) You may aggregate the Package (either the Standard Version or Modified Version) with other packages and Distribute the resulting aggregation provided that you do not charge a licensing fee for the Package. Distributor Fees are permitted, and licensing fees for other components in the aggregation are permitted. The terms of this license apply to the use and Distribution of the Standard or Modified Versions as included in the aggregation.

(8) You are permitted to link Modified and Standard Versions with other works, to embed the Package in a larger work of your own, or to build stand-alone binary or bytecode versions of applications that include the Package, and Distribute the result without restriction, provided the result does not expose a direct interface to the Package.

Items That are Not Considered Part of a Modified Version
(9) Works (including, but not limited to, modules and scripts) that merely extend or make use of the Package, do not, by themselves, cause the Package to be a Modified Version. In addition, such works are not considered parts of the Package itself, and are not subject to the terms of this license.

General Provisions
(10) Any use, modification, and distribution of the Standard or Modified Versions is governed by this Artistic License. By using, modifying or distributing the Package, you accept this license. Do not use, modify, or distribute the Package, if you do not accept this license.

(11) If your Modified Version has been derived from a Modified Version made by someone other than you, you are nevertheless required to ensure that your Modified Version complies with the requirements of this license.

(12) This license does not grant you the right to use any trademark, service mark, tradename, or logo of the Copyright Holder.

(13) This license includes the non-exclusive, worldwide, free-of-charge patent license to make, have made, use, offer to sell, sell, import and otherwise transfer the Package with respect to any patent claims licensable by the Copyright Holder that are necessarily infringed by the Package. If you institute patent litigation (including a cross-claim or counterclaim) against any party alleging that the Package constitutes direct or contributory patent infringement, then this Artistic License to you shall terminate on the date that such litigation is filed.

(14) Disclaimer of Warranty: THE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS IS' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL LAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    `;
  }
  else if (license === 'SIL Open Font License 1.1') {
    return `
SIL OPEN FONT LICENSE
Version 1.1 - 26 February 2007


PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.


DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting - in part or in whole - any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.


PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.


TERMINATION
This license becomes null and void if any of the above conditions are
not met.


DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.


    `;
  }
  else if (license === 'The Unlicense') {
    return `
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
    `;
  }
  else if (license === 'The Do What the Fuck You Want to Public License') {
    return `
    DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.
    `;
  }
  else if (license === 'The Zlib License') {
    return `
This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.

2. Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.

3. This notice may not be removed or altered from any source distribution.
    `;
  }
  else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};

