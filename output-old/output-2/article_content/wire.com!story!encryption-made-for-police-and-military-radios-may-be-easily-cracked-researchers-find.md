---
title: "Encryption Made for Police and Military Radios May Be Easily Cracked"
byline: "Kim Zetter"
siteName: "WIRED"
publishedTime: "2025-08-07T14:09:07.547-04:00"
lang: "en-US"
---

# Encryption Made for Police and Military Radios May Be Easily Cracked

Two years ago, researchers in the Netherlands [discovered an intentional backdoor](https://www.wired.com/story/tetra-radio-encryption-backdoor/) in an encryption algorithm baked into radios used by critical infrastructure–as well as police, intelligence agencies, and military forces around the world–that made any communication secured with the algorithm vulnerable to eavesdropping.

When the researchers publicly disclosed the issue in 2023, the European Telecommunications Standards Institute (ETSI), which developed the algorithm, advised anyone using it for sensitive communication to deploy an end-to-end encryption solution on top of the flawed algorithm to bolster the security of their communications.

But now the same researchers have found that at least one implementation of the end-to-end encryption solution endorsed by ETSI has a similar issue that makes it equally vulnerable to eavesdropping. The encryption algorithm used for the device they examined starts with a 128-bit key, but this gets compressed to 56 bits before it encrypts traffic, making it easier to crack. It’s not clear who is using this implementation of the end-to-end encryption algorithm, nor if anyone using devices with the end-to-end encryption is aware of the security vulnerability in them.

The end-to-end encryption the researchers examined, which is expensive to deploy, is most commonly used in radios for law enforcement agencies, special forces, and covert military and intelligence teams that are involved in national security work and therefore need an extra layer of security. But ETSI’s endorsement of the algorithm two years ago to mitigate flaws found in its lower-level encryption algorithm suggests it may be used more widely now than at the time.

In 2023, Carlo Meijer, Wouter Bokslag, and Jos Wetzels of security firm [Midnight Blue](https://www.midnightblue.nl/), based in the Netherlands, discovered vulnerabilities in encryption algorithms that are part of a European radio standard created by ETSI called TETRA (Terrestrial Trunked Radio), which has been baked into radio systems made by Motorola, Damm, Sepura, and others since the ’90s. The flaws remained unknown publicly until their disclosure, because ETSI refused for decades to let anyone examine the proprietary algorithms. The end-to-end encryption the researchers examined recently is designed to run on top of TETRA encryption algorithms.

The researchers found the issue with the end-to-end encryption (E2EE) only after extracting and reverse-engineering the E2EE algorithm used in a radio made by Sepura. The researchers plan to present their findings today at the BlackHat security conference in Las Vegas.

ETSI, when contacted about the issue, noted that the end-to-end encryption used with TETRA-based radios is not part of the ETSI standard, nor was it created by the organization. Instead it was produced by The Critical Communications Association’s (TCCA) security and fraud prevention group (SFPG). But ETSI and TCCA work closely with one another, and the two organizations include many of the same people. Brian Murgatroyd, former chair of the technical body at ETSI responsible for the TETRA standard as well as the TCCA group that developed the E2EE solution, wrote in an email on behalf of ETSI and the TCCA that end-to-end encryption was not included in the ETSI standard “because at the time it was considered that E2EE would only be used by government groups where national security concerns were involved, and these groups often have special security needs.

For this reason, Murgatroyd noted that purchasers of TETRA-based radios are free to deploy other solutions for end-to-end encryption on their radios, but he acknowledges that the one produced by the TCCA and endorsed by ETSI “is widely used as far as we can tell.”

Although TETRA-based radio devices are not used by police and military in the US, the majority of police forces around the world do use them. These include police forces in Belgium and Scandinavian countries, as well as East European countries like Serbia, Moldova, Bulgaria, and Macedonia, and in the Middle East in Iran, Iraq, Lebanon, and Syria. The Ministries of Defense in Bulgaria, Kazakhstan, and Syria also use them, as do the Polish military counterintelligence agency, the Finnish defense forces, and Lebanon and Saudi Arabia’s intelligence services. It’s not clear, however, how many of these also deploy end-to-end decryption with their radios.

The TETRA standard includes four encryption algorithms—TEA1, TEA2, TEA3 and TEA4—that can be used by radio manufacturers in different products, depending on the intended customer and usage. The algorithms have different levels of security based on whether the radios will be sold in or outside Europe. TEA2, for example, is restricted for use in radios used by police, emergency services, military, and intelligence agencies in Europe. TEA3 is available for police and emergency services radios used outside Europe but only in countries deemed “friendly” to the EU. Only TEA1 is available for radios used by public safety agencies, police agencies, and militaries in countries deemed not friendly to Europe, such as Iran. But it’s also used in critical infrastructure in the US and other countries for machine-to-machine communication in industrial control settings such as pipelines, railways, and electric grids.

All four TETRA encryption algorithms use 80-bit keys to secure communication. But the Dutch researchers revealed in 2023 that TEA1 has a feature that causes its key to get reduced to just 32 bits, which allowed the researchers to crack it in less than a minute.

In the case of the E2EE, the researchers found that the implementation they examined starts with a key that is more secure than ones used in the TETRA algorithms, but it gets reduced to 56 bits, which would potentially let someone decrypt voice and data communications. They also found a second vulnerability that would let someone send fraudulent messages or replay legitimate ones to spread misinformation or confusion to personnel using the radios.

The ability to inject voice traffic and replay messages affects all users of the TCCA end-to-end encryption scheme, according to the researchers. They say this is the result of flaws in the TCCA E2EE protocol design rather than a particular implementation. They also say that “law enforcement end users” have confirmed to them that this flaw is in radios produced by vendors other than Sepura.

But the researchers say only a subset of end-to-end encryption users are likely affected by the reduced-key vulnerability because it depends how the encryption was implemented in radios sold to various countries.

ETSI’s Murgatroyd [said in 2023](https://www.zetter-zeroday.com/interview-with-the-etsi-standards/) that the TEA1 key was reduced to meet export controls for encryption sold to customers outside Europe. He said when the algorithm was created, a key with 32 bits of entropy was considered secure for most uses. Advances in computing power make it less secure now, so when the Dutch researchers exposed the reduced key two years ago, ETSI recommended that customers using TEA1 deploy TCCA's end-to-end encryption solution on top of it.

But Murgatroyd said the end-to-end encryption algorithm designed by TCCA is different. It doesn’t specify the key length the radios should use because governments using the end-to-end encryption have their own “specific and often proprietary security rules” for the devices they use. Therefore they are able to customize the TCCA encryption algorithm in their devices by working with their radio supplier to select the “encryption algorithm, key management and so on” that is right for them—but only to a degree.

“The choice of encryption algorithm and key is made between supplier and customer organisation, and ETSI has no input to this selection—nor knowledge of which algorithms and key lengths are in use in any system,” he said. But he added that radio manufacturers and customers “will always have to abide by export control regulations.”

The researchers say they cannot verify that the TCCA E2EE doesn’t specify a key length because the TCCA documentation describing the solution is protected by non-disclosure agreement and provided only to radio vendors. But they note that the E2EE system calls out an “algorithm identifier" number, which means it calls out the specific algorithm it’s using for the end-to-end encryption. These identifiers are not vendor specific, the researchers say, which suggests the identifiers refer to different key variants produced by TCCA—meaning TCCA provides specifications for algorithms that use a 126 bit key or 56 bit key, and radio vendors can configure their devices to use either of these variants, depending on the export controls in place for the purchasing country.

Whether users know their radios could have this vulnerability is unclear. The researchers found a confidential 2006 Sepura product bulletin that [someone leaked online](https://www.scribd.com/document/237610110/Issue2-MOD-05-166-Crypto-Management-Tools), which mentions that “the length of the traffic key … is subject to export control regulations and hence the \[encryption system in the device\] will be factory configured to support 128, 64, or 56 bit key lengths.” But it’s not clear what Sepura customers receive or if other manufacturers whose radios use a reduced key disclose to customers if their radios use a reduced-key algorithm.

“Some manufacturers have this in brochures; others only mention this in internal communications, and others don’t mention it at all,” says Wetzels. He says they did extensive open-source research to examine vendor documentation and “ found no clear sign of weakening being communicated to end users. So while … there are ‘some’ mentions of the algorithm being weakened, it is not fully transparent at all.”

Sepura did not respond to an inquiry from WIRED.

But Murgatroyd says that because government customers who have opted to use TCCA’s E2EE solution need to know the security of their devices, they are likely to be aware if their systems are using a reduced key.

“As end-to-end encryption is primarily used for government communications, we would expect that the relevant government National Security agencies are fully aware of the capabilities of their end-to-end encryption systems and can advise their users appropriately,” Murgatroyd wrote in his email.

Wetzels is skeptical of this, however. “We consider it highly unlikely non-Western governments are willing to spend literally millions of dollars if they know they're only getting 56 bits of security,” he says.