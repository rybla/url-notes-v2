---
title: "Unveiling a 36 billion solar mass black hole at the centre of the Cosmic Horseshoe gravitational lens"
author: "Melo-Carneiro, Carlos R, Collett, Thomas E, Oldham, Lindsay J, Enzi, Wolfgang, Furlanetto, Cristina, Chies-Santos, Ana L, Li, Tian"
siteName: "OUP Academic"
pubDate: "2025-08-07"
lang: "en"
---

# Unveiling a 36 billion solar mass black hole at the centre of the Cosmic Horseshoe gravitational lens

Article Navigation

Journal Article

Navbar Search Filter Mobile Enter search term Search

## ABSTRACT

Supermassive black holes (SMBHs) are found at the centre of every massive galaxy, with their masses tightly connected to their host galaxies through a co-evolution over cosmic time. For massive ellipticals, the SMBH mass (⁠|$M\_\\text{BH}$|⁠) strongly correlates with the host central stellar velocity dispersion (⁠|$\\sigma \_e$|⁠), via the |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation. However, SMBH mass measurements have traditionally relied on central stellar dynamics in nearby galaxies (⁠|$z < 0.1$|⁠), limiting our ability to explore the SMBHs across cosmic time. In this work, we present a self-consistent analysis combining 2D stellar dynamics and lens modelling of the Cosmic Horseshoe gravitational lens system (⁠|$z\_l = 0.44$|⁠), one of the most massive lens galaxies ever observed. Using MUSE integral-field spectroscopy and high-resolution _Hubble Space Telescope_ imaging, we simultaneously model the radial arc – sensible to the inner mass structure – with host stellar kinematics to constrain the galaxy’s central mass distribution and SMBH mass. Bayesian model comparison yields a |$5\\sigma$| detection of an ultramassive black hole with |$\\log \_{10}(M\_\\text{BH}/{\\rm M}\_{\\odot }) = 10.56^{+0.07}\_{-0.08} \\pm (0.12)^\\text{sys}$|⁠, consistent across various systematic tests. Our findings place the Cosmic Horseshoe |$\\sim$||$1.5\\sigma$| above the |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation, supporting an emerging trend observed in brightest cluster galaxies and other massive galaxies, which suggests a steeper |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relationship at the highest masses, potentially driven by a different co-evolution of SMBHs and their host galaxies. Future surveys will uncover more radial arcs, enabling the detection of SMBHs over a broader redshift and mass range. These discoveries will further refine our understanding of the |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation and its evolution across cosmic time.

## 1 INTRODUCTION

Most massive galaxies are believed to host a supermassive black hole (SMBH) at their centre. More importantly, host galaxies and their SMBHs exhibit clear scaling relations, pointing to a co-evolution between the galaxy and the SMBH (Kormendy & Ho 2013). The SMBH mass (⁠|$M\_\\text{BH}$|⁠) has been shown to correlate with various galaxy properties, such as the bulge luminosity (e.g. Magorrian et al. 1998; Marconi & Hunt 2003; Gültekin et al. 2009), stellar bulge mass (e.g. Laor 2001; McLure & Dunlop 2002), dark matter (DM) halo mass (e.g. Marasco et al. 2021; Powell et al. 2022), number of host’s globular clusters (e.g. Burkert & Tremaine 2010; Harris, Poole & Harris 2014), and stellar velocity dispersion (e.g. Gebhardt et al. 2000; Beifiori et al. 2009). Notably, the |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation, which links SMBH mass to the effective stellar velocity dispersion of the host (⁠|$\\sigma \_e$|⁠), remains tight across various morphological types and SMBH masses (van den Bosch 2016). None the less, when SMBHs accrete mass from their neighbourhoods, they can act as active galactic nuclei (AGNs), injecting energy in the surrounding gas in a form of feedback. This feedback can be either positive, triggering star formation (Ishibashi & Fabian 2012; Silk 2013; Riffel et al. 2024), or negative quenching galaxy growth (e.g. Hopkins et al. 2006; Dubois et al. 2013; Costa-Souza et al. 2024).

It is expected that the most massive galaxies in the Universe, such as brightest cluster galaxies (BCGs), host the most massive SMBHs. Indeed, so-called ultramassive black holes (UMBHs; |$M\_\\text{BH} \\ge 10^{10}M\_\\odot$|⁠) have been found in such systems (e.g. Hlavacek-Larrondo et al. 2012). Most of these UMBHs have been measured through spatially resolved dynamical modelling of stars and/or gas. For instance, the UMBH in Holm 15A at |$z=0.055$| (⁠|$M\_\\text{BH} = (4.0 \\pm 0.80) \\times 10^{10}M\_\\odot$|⁠; Mehrgan et al. 2019) and the UMBH in NGC 4889 at |$z=0.021$| (⁠|$M\_\\text{BH} = (2.1 \\pm 1.6) \\times 10^{10}M\_\\odot$|⁠; McConnell et al. 2012) were both determined using stellar dynamical modelling. However, despite the success of this technique in yielding hundreds of SMBH mass measurements, the requirement for high-quality spatially resolved spectroscopy poses significant challenges for studies at increasing redshift (see e.g. Kormendy & Ho 2013, Suplemental Material S1).

None the less, the significance of these UMBHs lies in the fact that many of them deviate from the standard linear |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation (e.g. Kormendy & Ho 2013; den Bosch 2016). This suggests either a distinct evolutionary mechanism governing the growth of the largest galaxies and their SMBHs (McConnell et al. 2011), leading to a significantly steeper relation (Bogdán et al. 2018), or a potential decoupling between the SMBH and host galaxy co-evolution. Populating the high-mass end of the |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation, particularly through direct |$M\_\\text{BH}$| measurements, could help resolve this ongoing puzzle.

Recently, Nightingale et al. (2023), by modelling the gravitationally lensed radial image near the the Abell 1201 BCG (⁠|$z=0.169$|⁠), was able to measure the mass of its dormant SMBH as |$M\_\\text{BH} = (3.27 \\pm 2.12) \\times 10^{10}M\_\\odot$|⁠, therefore an UMBH. This provides a complementary approach to other high-_z_ probes of SMBH mass, such as reverberation mapping (Blandford & McKee 1982; Bentz & Katz 2015) and AGN spectral fitting (Shen 2013). Unlike these methods, which require active accretion and depend on local Universe calibrations, the lensing technique offers a direct measurement independent of the SMBH’s accretion state.

In this paper, we analyse the Cosmic Horseshoe gravitational lens system (Belokurov et al. 2007), where the lens galaxy is one of the most massive strong gravitational lenses known to date. The lens galaxy is an early-type galaxy (ETG) at redshift |$z\_l=0.44$|⁠, possibly part of a fossil group (Ponman et al. 1994), and is notable for lensing one of its sources into a nearly complete Einstein ring (the Horseshoe). Additionally, a second multiply imaged source forms a radial arc near the centre of the lens galaxy.

Due to the radial image formed very close to the centre, the inner DM distribution of the Cosmic Horseshoe can be studied in detail, as done by Schuldt et al. (2019). By simultaneously modelling stellar kinematics from long-slit spectroscopy and the positions of the lensed sources, Schuldt et al. (2019) found that the DM halo is consistent with a Navarro–Frenk–White (NFW; Navarro, Frenk & White 1997) profile, with the DM fraction within the effective radius (⁠|$R\_e$|⁠) estimated to be between 60 per cent and 70 per cent. Moreover, their models include a point mass at the galaxy’s centre, reaching values around |$\\sim 10^{10} M\_\\odot$|⁠, which could represent an SMBH; however, they did not pursue further investigations into this possibility.

Using new integral-field spectroscopic data from the Multi Unit Spectroscopic Explorer (MUSE) and imaging from the _Hubble Space Telescope_ (HST), we conducted a systematic modelling of the Cosmic Horseshoe system to reassess the evidence for an SMBH at the heart of the lens galaxy. We performed a self-consistent analysis of both strong gravitational lensing (SGL) and stellar dynamics, which demonstrated that the presence of an SMBH is necessary to fit both data sets simultaneously.

This paper is structured as follows: In Section [2](#sec2), we present the _HST_ imaging data and MUSE observations, along with the kinematic maps used for the dynamical modelling. Section [3](#sec3) briefly summarizes the lensing and dynamical modelling techniques, including the multiple-lens-plane formalism, the approximations adopted in this work, and the mass profile parametrization. In Section [4](#sec4), we present the results from our fiducial model and alternatives models, which we use to address the systematics on the SMBH mass. In Section [5](#sec5) we discuss our results and present other astrophysical implications. Finally, we summarize and conclude in Section [6](#sec6).

Unless otherwise, all parameter estimates are derived from the final sampling chain, with reported values representing the median of each parameter’s one-dimensional marginalized posterior distribution, with uncertainties corresponding to the |$16^\\text{th}$| and |$84^\\text{th}$| percentiles. Furthermore, throughout this paper, we adopt the cosmological parameters consistent with Planck Collaboration XIII (2016): |$\\Omega \_{\\Lambda ,0} = 0.6911$|⁠, |$\\Omega \_{\\text{m},0} = 0.3089$|⁠, |$\\Omega \_{\\text{b},0} = 0.0486$|⁠, and |$H\_0 = 67.74$| km s|$^{-1}$| Mpc|$^{-1}$|⁠.

## 2 DATA

The Cosmic Horseshoe (SDSS J1148+1930) system was first identified by Belokurov et al. (2007) as part of the Sloan Digital Sky Survey. The primary lens is a massive ETG at |$z\_l = 0.44$|⁠, with an estimated enclosed mass within the Einstein radius (⁠|$R\_\\text{Ein}$|⁠) of |$\\sim 5 \\times 10^{12}M\_\\odot$| (Dye et al. 2008; Schuldt et al. 2019). The radial arc and its counter-image correspond to a source at redshift |$z\_{s1} = 1.961$| (s1, hereafter), while the tangential arc is a star-forming galaxy (James et al. 2018) at redshift |$z\_{s2} = 2.381$| (s2, hereafter). In Fig. 1, the radial arc and its counter-image are highlighted within white boxes, with a zoomed-in view of the radial image displayed in the inset.

![HST/WFC3 colour composite image of the Cosmic Horseshoe, created using the F814W, F606W, and F475W filters. The system is composed by the main deflector ($z_l = 0.44$); the eponymous Einstein ring of the Cosmic Horseshoe ($z_{\text{s2}} = 2.381$); and the radial arc and its counter-image ($z_{s1} = 1.961$), both highlighted. The inset shows the radial arc. The figure is oriented such that north is up and east is left.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig1.jpeg?Expires=1757949012&Signature=huQsbEUdCruXiXDOoR-3-E~Mn2CPAcELC4oMsmxEIDxG59l94JP-faXObIcAYtpPMvmPs9lu9U8CZiYVCM2a3SRLse23MSA0ehNPsJrwIFzZlC5imOiRfi9VksvPRHaOubv77-eB3qvZB2WOBFNNQIprkkV1Pdw~cczRkfsZu2kB6FXxY4VRGt78RQ59f1PEcKfbZAClYu7XwiHRaeTzCiaVPBqIZ834Tl5zAMc~AvlJvScNWHUbuRe0BIpoW-lNXy5IBZMkCq7sv5a4WrDXyzdgo5FjKZf9J1TSMsh8HrJGHPhYMi2g~UmhDKsXm2tKNNp3qqh6jirSw09e6CJYTw__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 1.

_HST_/WFC3 colour composite image of the Cosmic Horseshoe, created using the _F_814_W, F_606_W_, and _F_475_W_ filters. The system is composed by the main deflector (⁠|$z\_l = 0.44$|⁠); the eponymous Einstein ring of the Cosmic Horseshoe (⁠|$z\_{\\text{s2}} = 2.381$|⁠); and the radial arc and its counter-image (⁠|$z\_{s1} = 1.961$|⁠), both highlighted. The inset shows the radial arc. The figure is oriented such that north is up and east is left.

### 2.1 _HST_ imaging

The _HST_ images used in this work were obtained with the Wide Field Camera 3 (WFC3) and downloaded from the Hubble Legacy Archive (HLA).1 Observations with the _F_475_W, F_606_W, F_814_W, F_110_W_, and _F_160_W_ filters were conducted in 2010 May,2 while the _F_275_W_ filter data were taken in 2011 November.3 The data reduction followed the HLA pipeline, which employs the DrizzlePac4 to process the images. This includes the combination of multiple exposures, correction for geometric distortion, subtraction of the sky background, and removal of cosmic rays. The final science images for the UVIS filters (_F_275_W, F_475_W, F_606_W_, and _F_814_W_) have a pixel scale of |$0.04\\,\\,\\mathrm{ arcsec}$|⁠, while the IR filters (_F_110_W_ and _F_160_W_) provide images with a pixel scale of |$0.13\\,\\,\\mathrm{ arcsec}$|⁠.

We made use of images in the _F_475_W_ and _F_814_W_ filters for our analysis. The _F_475_W_ band was selected for lens modelling, as the radial arc appears bluer and more distinct from the main-lens in this filter. Conversely, the _F_814_W_ band was used to trace the light distribution and stellar mass of the primary deflector (see Section [3](#sec3)), as the main-lens is brighter in this filter and the radial arc is not visible, minimizing contamination from s1. Both images were aligned using the astroalign software (Beroiz, Cabral & Sanchez 2020).

To construct the point spread function (PSF) for each filter, we identified two non-saturated stars from the _Gaia_ DR2 catalogue (Arenou et al. 2018) and performed an interactive PSF modelling using psfr (see e.g. Birrer et al. 2019). We follow the same procedure as Birrer et al. (2019), applying a |$90^\\circ$| rotation symmetry based on the _HST_ optical symmetry. This allows each star to be rotated four times, enabling PSF model estimation using a total of eight stacked images. The noise map for each pixel _i_ was calculated by combining the background noise |$\\sigma \_{\\text{bkgd}}$| and Poisson noise in quadrature: |$\\sigma ^2\_{\\text{rms,i}} = \\sigma ^2\_{\\text{bkgd}} + \\sigma ^2\_{\\text{Poisson,i}}$|⁠. The background level was estimated as a constant value, measured from an empty region of sky near the main deflector, using the astropy sigma-clipping method. The Poisson noise was calculated from the effective exposure map and the intensity counts for each pixel.

### 2.2 MUSE observations and kinematical map

The integral-field spectroscopic observations were conducted using the VLT/MUSE instrument across three separate visits5 and retrieved from the ESO Science Archive Facility.6 The data cover a spectral range of |$4650\\!-\\!9300$| Å, sampled at 1.25Å px−1, with a mean spectral resolution of |$\\sim 2.6$| Å at full width at half-maximum (⁠|$\\sigma \\sim 50$| km s|$^{-1}$|⁠). The spatial pixel scale is |$0.2\\,\\,\\mathrm{ arcsec}$|⁠, and the seeing during observations was |$0.8\\,\\,\\mathrm{ arcsec}$|⁠. Data reduction followed the ESO Phase 3 Data Release, utilizing the MUSE pipeline (Weilbacher, Streicher & Palsa 2016). The MUSE data cube was aligned with _HST_ images by generating a collapsed image from the cube and using astroalign to register it with the _F_475_W HST_ observation.

To extract stellar kinematics from the MUSE data cube, we selected all pixels with a signal-to-noise ratio (SNR) greater than 2.5, excluding regions exhibiting emission from s2. Pixels corresponding to the radial source position were also inspected, but no contribution from s1 was identified in the spectra. The remaining pixels were spatially binned using the Voronoi binning method of Cappellari & Copin (2003) to achieve a minimum SNR of 15. The SNR was calculated as the ratio of the average signal to the average noise in the rest-frame spectral range |$5600\\!-\\!7600$| Å. Using the continuum rest-frame range |$6000\\!-\\!6200$| Å produced negligible differences in the results.

The mean velocity (_v_) and velocity dispersion (⁠|$\\sigma \_v$|⁠) in each Voronoi bin were measured using the penalized pixel fitting method, as implemented in the ppxf software (Cappellari & Emsellem 2004). For templates, we adopted the full X-shooter Spectral Library SSP models (XLS-SSP-DR3; Verro et al. 2022), which offer a resolution of |$\\sim 13$| km s|$^{-1}$| and a wavelength coverage from 3500 to 24800 Å. The XLS-SSP library was selected due to its high resolution, enabling convolution with the MUSE instrumental resolution after de-shifting the galaxy spectra. Each Voronoi bin was fitted over the wavelength range |$5600\\!-\\!7600$| Å (galaxy-frame), with emission lines within this range masked.

Uncertainties for _v_ and |$\\sigma \_v$| were determined through Monte Carlo perturbations of the best-fitting model, performing 200 realizations and taking the standard deviation as the uncertainty. Template selection is a known source of systematic uncertainty. Recently, Knabel et al. (2025) highlighted that template mismatch can dominate the error budget in high-precision applications, for instance in time-delay cosmography. However, for SMBH mass measurements, we consider its impact to be secondary relative to other sources of uncertainty, such as assumptions in the dynamical modelling (e.g. anisotropy profile and intrinsic shape). A detailed investigation of template choice effects on SMBH mass measurements is beyond the scope of this work.

We computed the velocity second moment as |$v\_\\text{rms} = \\sqrt{v^2 + \\sigma \_v^2}$|⁠, finding that rotational velocities are negligible, indicating the galaxy is dominated by the velocity dispersion.

The observed |$v\_{\\rm rms}$| map and radial profile are shown in Fig. 2\. The profile is nearly flat in the galaxy’s central regions (⁠|$< 0.5\\,\\,\\mathrm{ arcsec}$|⁠) but increases for |$r > 0.75\\,\\,\\mathrm{ arcsec}$|⁠. This rising behaviour at larger radii was previously reported by Spiniello et al. (2011) using long-slit spectroscopy of the Cosmic Horseshoe and is a common feature among BCGs (e.g. Newman, Ellis & Treu 2015; Smith, Lucey & Edge 2017b). Notably, the outermost bins exhibit larger error bars, reflecting the low SNR in these regions.

![Stellar dynamics fiducial model. The top panels show the observed $v_\text{rms}$ kinematic map (left), the median kinematic model (centre), and the normalized residuals (right). The bottom panel presents the radial kinematic profile (black dots) alongside the median model and its $1\sigma$ credible region. The black dots in the top panels mark the centroids of the Voronoi bins.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig2.jpeg?Expires=1757949012&Signature=07bmQo6mJtQa5mWbU9t2M2Ovapl0uNskey8UA0LH~PKPmnHS7wkc4qCec4SDGeTH9u~YV6pN2Je3rX7pJPMeFUyinEKzTXULhA2dkuQAxNONdDa2MF1uHsT5ac7~zZCuoOw4UgZxifzbM32i1BC-fnl8OR6~CE42igklnkgd3IiSxJH9P43bPzrU99KfWJwI3LDYj~Q8IScKI5EcYIrHdZimX8U1BItGyQQ3t2eYO5Yfg0Hje4dRaTgVWwHlrNdcfx9UQ05J3F0sD7NBJQjXE4DKjj0DsEIbHNmOR8IfROdGBeOjtCuBtH~xfxmZrG1~2T40~tXNWhI-h1ggMeYzTQ__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 2.

Stellar dynamics fiducial model. The top panels show the observed |$v\_\\text{rms}$| kinematic map (left), the median kinematic model (centre), and the normalized residuals (right). The bottom panel presents the radial kinematic profile (black dots) alongside the median model and its |$1\\sigma$| credible region. The black dots in the top panels mark the centroids of the Voronoi bins.

The effective velocity dispersion of the main-lens was determined by co-adding all spectra within the galaxy’s effective radius (⁠|$R\_e = 2.10\\,\\,\\mathrm{ arcsec}$|⁠).7 and fitting the integrated spectrum with ppxf, as outlined earlier. This analysis yielded |$\\sigma \_e = 366 \\pm 6$| km s|$^{-1}$|⁠. We confirmed that using the flux-weighted method present in Emsellem et al. (2007) lead to a similar result.

## 3 METHODS

We construct a fully self-consistent mass model for the main lensing galaxy by jointly modelling its SGL effect and spatially resolved stellar velocity dispersion. This combined approach has been successfully applied in previous studies to constrain the mass profiles of ETGs in tests of modified gravity (e.g. Collett et al. 2018; Melo-Carneiro, Furlanetto & Chies-Santos 2023) and to investigate the distribution of baryonic and DM content within galaxies (e.g. Barnabè et al. 2012; Wang et al. 2022). By simultaneously leveraging both methods, we mitigate degeneracies that arise when using them independently, such as the mass-anisotropy degeneracy (e.g. Gerhard 1993) and the mass-sheet degeneracy (e.g. Gorenstein, Falco & Shapiro 1988). Furthermore, the Cosmic Horseshoe system is a compound lens with two sources at different redshifts (Schuldt et al. 2019). The joint modelling of these sources can also help break (or at least alleviate) these degeneracies present in the lens model (e.g. Enzi et al. 2025).

### 3.1 Gravitational lensing

#### 3.1.1 Formalism

For a single-source plane lens configuration, the source plane position, |$\\boldsymbol {\\beta }$|⁠, relates to the observed lensed position, |$\\boldsymbol {\\theta }$|⁠, via the lens equation

$$\\begin{eqnarray} \\boldsymbol {\\beta } = \\boldsymbol {\\theta }-\\boldsymbol {\\alpha }(\\boldsymbol {\\theta }), \\end{eqnarray}$$

(1)

where |$\\boldsymbol {\\alpha }$| is the reduced deflection angle, given by

$$\\begin{eqnarray} \\boldsymbol {\\alpha }(\\boldsymbol {\\theta }) = \\frac{1}{\\pi } \\int \\mathrm{ d}^2\\boldsymbol {\\theta }^\\prime \\kappa (\\boldsymbol {\\theta }^\\prime) \\frac{\\left(\\boldsymbol {\\theta }-\\boldsymbol {\\theta }^\\prime \\right)}{\\, \\, \\left| \\boldsymbol {\\theta }-\\boldsymbol {\\theta }^\\prime \\right|^2}. \\end{eqnarray}$$

(2)

Here, the convergence |$\\kappa = \\Sigma /\\Sigma \_\\text{crit}$| represents the surface mass density of the lens scaled by the critical surface density, |$\\Sigma \_\\text{crit}$|⁠, defined as

$$\\begin{eqnarray} \\Sigma \_\\text{crit} = \\frac{c^2}{4\\pi G}\\frac{D\_s}{D\_l D\_{ls}}, \\end{eqnarray}$$

(3)

where |$D\_{ls}$|⁠, |$D\_l$|⁠, and |$D\_s$| are the angular diameter distances between the lens and source, lens and observer, and source and observer, respectively.

One can notice that by changing the source redshift, only the angular diameter distances are changed in the reduced deflection angle (equation [2](#update1751386999584)). For two light rays passing through the same point in the lens plane, but originating from different source planes, the relationship between their deflection angles can be expressed as a scaling factor, |$\\eta$|⁠, determined by the ratio

$$\\begin{eqnarray} \\frac{\\boldsymbol {\\alpha }\_1}{\\boldsymbol {\\alpha }\_2} = \\frac{D\_{ls1}}{D\_{s1}}\\frac{D\_{s2}}{D\_{ls2}} \\equiv \\eta , \\quad \\rm{with z\_{s2} > z\_{s1}}, \\end{eqnarray}$$

(4)

and where the subscripts |$s1$| and |$s2$| refer to the sources s1 and s2.

In cases where multiple sources are aligned along the line of sight (LOS), the gravitational field of the first source lenses the light from the second source before it is further deflected by the main-lens. To account for these effects, a full multiple-lens-plane formalism is required (Schneider, Ehlers & Falco 1992). The single-plane lens equation (equation [1](#equ1)) can then be generalized into the compound lens equation:

$$\\begin{eqnarray} \\boldsymbol {\\theta }\_k = \\boldsymbol {\\theta }\_1-\\sum \_{j=1}^{k-1}\\eta \_{jk} \\boldsymbol {\\alpha }\_j\\left(\\boldsymbol {\\theta }\_j\\right), \\end{eqnarray}$$

(5)

where |$\\boldsymbol {\\theta }\_k$| is the angular position of a light ray in the |$k^\\text{th}$| plane, and |$\\boldsymbol {\\alpha }\_j$| is the angular deflection caused by the |$j^{\\text{th}}$| lens acting on rays originating from the furthest redshift source plane. The factor |$\\eta \_{jk}$| is the scaling factor as defined in equation ([4](#equ4)), i.e.

$$\\begin{eqnarray} \\eta \_{jk} = \\frac{D\_{jk}}{D\_k}\\frac{D\_{s}}{D\_{js}}, \\end{eqnarray}$$

(6)

with _s_ being the most distant source. In the case of just one lens and one source, equation ([5](#equ5)) reduces to equation ([1](#equ1)), with |$\\boldsymbol {\\theta }\_2 = \\boldsymbol {\\beta }$|⁠, |$\\boldsymbol {\\theta }\_1 = \\boldsymbol {\\theta }$|⁠, and |$\\eta \_{jk} = 1$|⁠.

To reconstruct the unlensed sources, the lens model must, in principle, account for deflections from both the main deflector and source s1 on s2. However, in the Cosmic Horseshoe system, the deflection contribution from s1 to the total deflection angle experienced by s2 is expected to be negligible for three main reasons: (i) the sources lie at similar redshifts, making s1 an inefficient lens; (ii) the positions of the radial image and its counter-image indicates that s1 is not closely aligned with s2, and the lensed images of s2 do not pass near s1; and (iii) the low observed lensed surface brightness of s1, combined with its small size after reconstruction (see Section [4](#sec4)), suggests that it is a low-mass galaxy. To further support this assumption, we perform a compound lens model including s1’s mass contribution, which confirms its negligible impact.

#### 3.1.2 Lens modelling

For the lens modelling, we employ the open-source software pyautolens (Nightingale, Dye & Massey 2018; Nightingale et al. 2021), which implements a Bayesian version (Suyu et al. 2006) of the semilinear inversion (SLI) method (Warren & Dye 2003). For a given set of non-linear parameters (describing the lens mass model and/or the source), the code linearly ray-traces image-pixels from the image plane back to the source plane, reconstructing the source emission using an adaptive mesh grid.8

In pyautolens the _native_ likelihood is that described in Suyu et al. (2006, equation 19) and Dye et al. (2008, equation 5). This approach incorporates the instrumental PSF blurring alongside regularization terms for the pixelized source reconstruction, which helps to mitigate ill-posed solutions during the linear inversion. We refer the readers to these references for more details.9

To remove overmagnified and undermagnified solutions (Maresca, Dye & Li 2021), we trace two image plane regions of s1 back to the source plane, where they are expected to overlap. If these conjugate regions fail to overlap after delensing, we penalize the likelihood of this solution by a factor proportional to the distance between the two regions in the source plane. This approach effectively removes unphysical solutions resembling overmagnified/undermagnified versions of the data, without the need for parameter fine-tuning. Using regions, rather than pairs of conjugate points, also mitigates the risk of selecting incorrect pairs. This is particularly relevant in the case of the Cosmic Horseshoe system, where the radial image is very faint and embedded within the lens light, making it challenging to reliably identify conjugate pairs between the radial image and its counter-image. Further details of this approach are provided in Appendix  [A](#sec9).

In this work, our primary goal is to constrain the inner mass distribution of the main deflector through joint modelling of the radial image of s1 and its counter-image, along with the host galaxy’s stellar kinematics. As a result, we do not attempt to model the full Einstein ring of s2 in our main analysis. None the less, the lensed emission from s2 traces the total projected mass distribution on larger scales and thus provides valuable complementary constraints on the global mass profile of the main deflector.

To incorporate this information, we first modelled the lensed emission from source s2 independently, using an elliptical power-law (EPL) mass profile for the main deflector implemented in pyautolens. This fit yields a mass within the Einstein radius of |$M\_{\\text{Ein}} = 5.46 \\times 10^{12}\\, M\_{\\odot }$|⁠, corresponding to an effective Einstein radius of |$R\_\\text{Ein}=5.08\\,\\,\\mathrm{ arcsec}$|⁠. These values agree with those reported by Dye et al. (2008) and Schuldt et al. (2019). We then incorporate this result into our combined lensing + dynamics analysis by imposing a Gaussian prior on |$M\_{\\text{Ein}}$| with mean |$5.46 \\times 10^{12} M\_{\\odot }$| and standard deviation of |$\\sigma \_{M\_{\\text{Ein}}} = 0.27 \\times 10^{12} M\_{\\odot }$|⁠. Fig. 3 shows the image pixels used for the EPL fit, the highest-likelihood model, and the reconstructed source. Further details of the EPL fitting procedure are provided in Appendix  [B](#sec10).

![Fits to the Cosmic Horseshoe in the F475W filter. From left to right, the panels display the lens-subtracted image, the highest-likelihood EPL model, and the reconstructed source s2 at $z=2.381$. To enhance the efficiency of the lens modelling, we applied a mask around the lensed source and only modelled pixels within the masked region, as shown in the central panel. All images are in units of electrons per second. Additional details about the lens modelling are provided in Appendix B.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig3.jpeg?Expires=1757949012&Signature=hNuXnHHbuSIuo13EahtMa3qU-2qwZn5YZEoWZ8H3UsgS0MBUfbfAQeqvRG~363ygYQS570B9d1x6JumqAaFTI23ktVtOQhzk24mGexH1WtNIPb0KPZrwry~QancF88IeCH0-gBlr5pNSkQHtRR9HJxwykZXTNP4hFcIjz282zQDlP6MsVZcQUeOV6P03~SVoUmcSneoBEmMZIQAJqvgZ4WOL8r6iXAB7fDNDrqSM4W0DTry67bPD8TRdyVRydtq1te-mR9cRGIOvAVDIpyJEyzm4IbuW5G9JNRCcqkq0Ee7XQkvV-AlawsmEQXC0IAipfgHtGuPM~TVlbXS9GUfILQ__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 3.

Fits to the Cosmic Horseshoe in the _F_475_W_ filter. From left to right, the panels display the lens-subtracted image, the highest-likelihood EPL model, and the reconstructed source s2 at |$z=2.381$|⁠. To enhance the efficiency of the lens modelling, we applied a mask around the lensed source and only modelled pixels within the masked region, as shown in the central panel. All images are in units of electrons per second. Additional details about the lens modelling are provided in Appendix  [B](#sec10).

To test the assumption that compound lensing by the first source is negligible, we also ran a compound lens model with the herculens code (Galan et al. 2022; Enzi et al. 2025), including a singular isothermal ellipse mass component for s1. For this compound model the Einstein radius of the primary lens never changed by more than 0.6 per cent, which is substantially smaller than the width of the Gaussian we have adopted for the mass of the primary lens within the main Horseshoe.

While this prior provides an additional constraint on the large-scale mass distribution, we test its impact in Section [4](#sec4) and find that excluding it from the likelihood has no effect on the inferred SMBH mass.

### 3.2 Dynamical modelling

We described the dynamical state of the system using the Jeans formalism for a steady-state axisymmetric configuration (Binney & Tremaine 2008). In spherical coordinates |$(r, \\theta , \\phi)$|⁠, and assuming the velocity ellipsoid is aligned with the spherical coordinate system, the Jeans equations are (Cappellari 2020):

$$\\begin{eqnarray} \\begin{aligned} \\frac{\\partial (\\nu \\overline{v^2\_r})}{\\partial r} + \\frac{2\\nu \\overline{v^2\_r} -\\nu \\overline{v^2\_\\theta } -\\nu \\overline{v^2\_\\phi } }{r} &= -\\nu \\frac{\\partial \\Phi }{\\partial r}, \\\\ \\frac{\\partial (\\nu \\overline{v^2\_\\theta })}{\\partial \\theta } + \\frac{\\nu \\overline{v^2\_\\theta }-\\nu \\overline{v^2\_\\phi }}{\\tan {\\theta }} &= -\\nu \\frac{\\partial \\Phi }{\\partial \\theta }, \\end{aligned} \\end{eqnarray}$$

(7)

where |$\\Phi$| is the total gravitational potential, |$(v\_r, v\_\\theta , v\_\\phi)$| the velocities in spherical coordinates, and |$\\nu$| is the intrinsic luminosity density.

Defining the stellar anisotropy as

$$\\begin{eqnarray} \\beta \_\\text{star} = 1-\\frac{{\\overline{v^2\_\\theta }} }{{\\overline{v^2\_r}}} \\equiv 1-\\frac{{\\sigma ^2\_\\theta }}{{\\sigma ^2\_r}}, \\end{eqnarray}$$

(8)

and applying the boundary condition |$\\nu \\overline{v^2\_r} = 0$| as |$r \\rightarrow 0$|⁠, the Jeans equations ([7](#equ7)) simplify to

$$\\begin{eqnarray} \\nu \\overline{v^2\_\\phi } = \\left(1-\\beta \_\\text{star}\\right)\\left\[\\nu \\overline{v^2\_r} + \\frac{\\partial \\left(\\nu \\overline{v^2\_r}\\right)}{\\partial \\theta }\\tan {\\theta } \\right\] + \\nu \\frac{\\partial \\Phi }{\\partial \\theta }\\tan {\\theta }, \\end{eqnarray}$$

(9)

and

$$\\begin{eqnarray} \\nu \\overline{v^2\_r} = {\\displaystyle \\int \_{r}}^\\infty \\left(\\frac{r^\\prime }{r} \\right)^{2\\beta \_\\text{star}}\\Psi (r^\\prime , \\theta ^\\prime)\\mathrm{ d}r^\\prime , \\end{eqnarray}$$

(10)

where

$$\\begin{eqnarray} \\theta ^\\prime &=& \\arcsin {\\left\[\\left(\\frac{r^\\prime }{r} \\right)^{\\beta \_\\text{star}-1}\\sin {\\theta } \\right\]}, \\quad \\text{and}\\\\ \\Psi (r, \\theta) &=& \\nu \\left(\\frac{\\partial \\Phi }{\\partial r} -\\frac{\\tan {\\theta }}{dr}\\frac{\\partial \\Phi }{\\partial \\theta } \\right). \\end{eqnarray}$$

(11)

By solving equations ([9](#equ9)) and ([10](#update1751387239601)), the velocity moments can be integrated along the LOS (see e.g. section 3 on Cappellari 2020) to compute the observables, which can be compared to the galaxy’s observed |$v\_\\text{rms}$| map.

For this purpose, we employed the Jeans Anisotropic Modelling method (Cappellari 2008, 2020), as implemented in the jampy software, to perform the stellar dynamical modelling. This approach assumes that the galaxy’s mass distribution can be parametrized as a sum of concentric elliptical Gaussians (see Section [3.3](#sec3-3)).

For the dynamical modelling, we evaluated the goodness-of-fit using a |$\\chi ^2$|\-likelihood, which compares the observed data to the model predictions convolved with the MUSE PSF.10 This ensures that the effects of seeing are properly accounted for in the analysis.

### 3.3 Multi-Gaussian Expansion

The stellar light and mass component are modelled using the Multi-Gaussian Expansion (MGE) method (Emsellem, Monnet & Bacon 1994; Cappellari 2002), which parametrizes the stellar surface brightness as a sum of concentric elliptical Gaussians with the same orientation. If |$I(x^{\\prime },y^{\\prime })$| represents the stellar surface brightness, its MGE parametrization is given by

$$\\begin{eqnarray} I(x^{\\prime },y^{\\prime }) = \\sum \_{j=1}^{N} \\frac{L\_j}{2\\pi \\sigma \_{j}^{2} q^{\\prime }\_j}\\exp {\\left\[-\\frac{1}{2\\sigma \_{j}^{2}} \\left(x^{\\prime 2} + \\frac{y^{\\prime 2}}{q\_{j}^{\\prime 2}}\\right)\\right\]}, \\end{eqnarray}$$

(12)

where _N_ is the total number of Gaussians. The |$j^{\\text{th}}$| Gaussian component has a total luminosity |$L\_j$|⁠, an observed projected axial ratio |$0 \\le q^{\\prime }\_j \\le 1$|⁠, and a dispersion |$\\sigma \_j$| along the semimajor axis, aligned with |$x^{\\prime }$|\-axis.

The three-dimensional luminosity density |$\\nu$| (and corresponding mass density) is obtained by deprojecting equation ([12](#equ12)), assuming an inclination angle _i_, where |$i = 90^{\\circ }$| corresponds to an edge-on orientation. The luminosity density |$\\nu$| is then converted into stellar mass density using a mass-to-light ratio, |$\\Upsilon \_\\star$|⁠.

Assuming an oblate axisymmetric model, the stellar mass density profile in cylindrical coordinates |$(R, \\phi , z)$| is given by (Cappellari 2002):

$$\\begin{eqnarray} \\rho (R, z) = \\sum \_{j=1}^N \\frac{M\_j}{(2\\pi)^{3/2} \\sigma \_{j}^3 q\_j} \\exp {\\left\[-\\frac{1}{2 \\sigma \_j^2} \\left(R^2 + \\frac{z^2}{q\_{j}^2}\\right)\\right\]}. \\end{eqnarray}$$

(13)

Here, |$M\_j = \\Upsilon \_\\star L\_j$| represents the mass of the |$j^{\\text{th}}$| Gaussian component, with |$L\_j$| luminosity and |$\\sigma \_j$| dispersion. The deprojected axial ratio, |$q\_j$|⁠, is given by

$$\\begin{eqnarray} q\_{j}^2 = \\frac{q\_{j}^{\\prime 2}-\\cos ^2{i}}{\\sin ^2{i}}. \\end{eqnarray}$$

(14)

### 3.4 Mass profile

We described the mass profile of the main deflector using the MGE method, assuming a multicomponent mass model composed by (i) a stellar mass component; (ii) a DM halo component; and (iii) an additional central mass concentration representing an SMBH.

The stellar component was derived by deprojecting the observed surface brightness profile, as by equation ([12](#equ12)). The DM halo follows a generalized Navarro–Frank–White (gNFW; Wyithe, Turner & Spergel 2001) profile,

$$\\begin{eqnarray} \\rho (r) = \\rho \_s \\left(\\frac{r}{r\_s} \\right)^{-\\gamma \_{\\text{DM}}} \\left(1 + \\frac{r}{r\_s}\\right)^{\\gamma \_{\\text{DM}}-3}, \\end{eqnarray}$$

(15)

where |$\\rho \_s$| is a characteristic density at the scale radius |$r\_s$|⁠, and |$\\gamma \_{\\text{DM}}$| is the inner density slope that allows the profile to be cuspier (⁠|$\\gamma \_{\\text{DM}} > 1$|⁠) or cored (⁠|$\\gamma \_{\\text{DM}} = 0$|⁠). For |$\\gamma \_{\\text{DM}} = 1$|⁠, the profile reduces to the classical NFW (Navarro et al. 1997). To include this halo contribution in the dynamical model, we followed Cappellari et al. (2013) and also parametrized the DM component using the MGE method.11 Finally, the SMBH is modelled as an additional Gaussian with a small-scale radius (⁠|$\\sigma = 0.01\\,\\,\\mathrm{ arcsec}$|⁠).

The total mass distribution of the main-lens galaxy is then described by equation ([13](#equ13)), with the summation over |$N\_\\text{star} + N\_\\text{DM} + N\_\\text{BH}$| Gaussians, where |$N\_j$| represents the number of Gaussians used to parametrize each respective mass component.

We also incorporate an external lensing shear to account for the perturbations of structures near the LOS, besides s1. The external shear field is parametrized by the two elliptical components |$(\\epsilon ^{\\text{sh}}\_1, \\epsilon ^{\\text{sh}}\_2)$|⁠. From these components, the shear magnitude |$\\gamma ^{\\text{sh}}$| and shear angle |$\\phi ^{\\text{sh}}$|⁠, measured counter-clockwise from north, are obtained as

$$\\begin{eqnarray} \\gamma ^{\\text{sh}} = \\sqrt{{\\epsilon ^{\\text{sh}}\_1}^2 + {\\epsilon ^{\\text{sh}}\_2}^2}, \\quad \\tan {\\left(2\\phi ^{\\text{sh}}\\right)} = \\frac{\\epsilon ^{\\text{sh}}\_2}{\\epsilon ^{\\text{sh}}\_1}. \\end{eqnarray}$$

(16)

### 3.5 Joint modelling

Since lensing and dynamical data are independent, the joint likelihood is constructed as the product of their individual likelihood functions. In addition to these terms, the likelihood includes two additional terms: one enforcing consistency with the mass enclosed within the Einstein radius, as defined by the lensed image of s2 (⁠|$M\_{\\text{Ein}}$|⁠), and the penalty term defined in Section [3.1.2](#sec3-1-2) that punishes solutions where s1 is significantly overmagnified or undermagnified.

We break the modelling process into the following stages, so as to make it more tractable

*   Dynamical Model Fitting: We begin by fitting only the dynamical model, but with the addition of the prior term for  |$M\_{\\text{Ein}}$| and the conjugate regions of s1 image. This provides an initial estimate of the mass parameters.
    
*   Source Grid Model of s1: Using the highest-likelihood dynamical model, we then sample the pixelized source grid of s1. A Voronoi grid is used to allocate more pixels to highly magnified regions of the source plane, along with a constant regularization term. In pyautolens, this is represented by an Overlay mesh grid, with VoronoiNN pixelization, and ConstantSplit regularization.
    
*   Mass Parameter Resampling: After obtaining the source grid, we resample the mass parameters using the full (lensing + dynamics) likelihood, with s1 reconstructed based on the highest-likelihood model from the previous chain. This step improves the estimate of the mass parameters.
    
*   Source Plane Resampling: Using the highest-likelihood model of the previous stage, we resample the parameters describing the source plane pixelization and regularization. The source is now reconstructed in the source plane using a brightness-adaptive Voronoi mesh grid, with Natural Neighbour interpolation (Sibson 1981) and a regularization scheme that adapts the degree of smoothing based on the source’s surface brightness. This ensures that brighter regions are reconstructed at higher resolution, while regions with lower SNR are more regularized. In pyautolens notation, this corresponds to a KMeans mesh grid, with VoronoiNN pixelization, and AdaptiveBrightnessSplit regularization.
    
*   Final Resampling of the Lens Macro Model: Finally, using the source grid that adapts to the source morphology, we sample the lens macro model once more, keeping the hyper-parameters of the source fixed at the highest-likelihood result of the previous step.
    

Throughout all these stages, the same priors are applied across all chains for each given lens mass macro model. Further details are provided in Appendix  [C](#sec11).

We sampled for the posterior distribution of the non-linear parameters using the nested sampler dynesty (Speagle 2020), a Python implementation of the nested sampling algorithm (Skilling 2006) designed for estimating Bayesian posteriors and evidences. The Bayesian evidence, |$\\mathcal {Z}$|⁠, which is the integral of the likelihood times the prior over the entire multidimensional parameter space, can be used to rank different models for the same data set, providing an objective way to compare models (e.g. Liddle et al. 2006).

The Bayesian evidence naturally incorporates a penalty for increased model complexity – penalizing models with additional free parameters, and provides an objective basis for the principle of Occam’s razor. Typically, when comparing models using the difference in their log-evidences, |$\\Delta \\ln \\mathcal {Z}$|⁠, a difference in |$\\Delta \\ln {\\mathcal {Z}} > 1$| is considered significant, |$>2.5$| strong, and |$>5$| is decisive, in favour of the model with the highest evidence (e.g. Jeffreys 1961).

## 4 RESULTS

To disentangle the baryonic matter from the DM contribution and to reveal the radial arc, a model for the lens light distribution is essential. We fitted the lens light in both _HST_/WFC3 filters, _F_814_W_ and _F_475_W_, using the MGE method described in Section [3.3](#sec3-3). During the fitting process, the radial and tangential lensed images were masked to minimize contamination from the source planes. The PSF effects were incorporated by modelling the psfr model as a sum of circular Gaussians. The _F_814_W_ lens light model was used to trace the stellar distribution, as it is a better tracer of the stellar mass budged and has less contamination from the radial arc. For the lens modelling, we utilized the _F_475_W_ image after the lens light subtraction, as the radial source is better seem in this band. The left panel of Fig. 3 shows the _F_475_W_ lens-subtracted image, and Table 1 presents the MGE decomposition for the _F_814_W_ band.

Table 1.

MGE components of the _HST_/_F_814_W_ image. The columns, from left to right, show the surface brightness of each Gaussian component, the MGE width, and the observed axis ratio. The MGE units were converted from counts to physical values following Trick, van de Ven & Dutton (2016), accounting for the redshift dimming effect and assuming a solar Space Telescope magnitude (STmag) of |$M\_{\\odot ,\\text{F814W}} = 5.35$| from Willmer (2018).

_I_ \[L|$\_\\odot$|/pc|$^2\]$|

|$\\sigma$| \[arcsec\]

|$q^\\prime$|

2416.68

0.0198

0.825

5883.51

0.1379

0.650

351.98

0.2026

1.000

1630.70

0.2161

0.650

770.51

0.3609

0.673

425.76

0.5039

1.000

171.75

1.1015

1.000

70.03

3.2367

1.000

_I_ \[L|$\_\\odot$|/pc|$^2\]$|

|$\\sigma$| \[arcsec\]

|$q^\\prime$|

2416.68

0.0198

0.825

5883.51

0.1379

0.650

351.98

0.2026

1.000

1630.70

0.2161

0.650

770.51

0.3609

0.673

425.76

0.5039

1.000

171.75

1.1015

1.000

70.03

3.2367

1.000

Table 1.

MGE components of the _HST_/_F_814_W_ image. The columns, from left to right, show the surface brightness of each Gaussian component, the MGE width, and the observed axis ratio. The MGE units were converted from counts to physical values following Trick, van de Ven & Dutton (2016), accounting for the redshift dimming effect and assuming a solar Space Telescope magnitude (STmag) of |$M\_{\\odot ,\\text{F814W}} = 5.35$| from Willmer (2018).

_I_ \[L|$\_\\odot$|/pc|$^2\]$|

|$\\sigma$| \[arcsec\]

|$q^\\prime$|

2416.68

0.0198

0.825

5883.51

0.1379

0.650

351.98

0.2026

1.000

1630.70

0.2161

0.650

770.51

0.3609

0.673

425.76

0.5039

1.000

171.75

1.1015

1.000

70.03

3.2367

1.000

_I_ \[L|$\_\\odot$|/pc|$^2\]$|

|$\\sigma$| \[arcsec\]

|$q^\\prime$|

2416.68

0.0198

0.825

5883.51

0.1379

0.650

351.98

0.2026

1.000

1630.70

0.2161

0.650

770.51

0.3609

0.673

425.76

0.5039

1.000

171.75

1.1015

1.000

70.03

3.2367

1.000

In the following sections, we discuss our fiducial model and explore various mass models to assess potential systematic effects on the SMBH mass inference. Table 3 summarizes these models and their resulting |$M\_\\text{BH}$| values. Unless otherwise, all parameter estimates are derived from the final sampling chain, with reported values representing the median of each parameter’s one-dimensional marginalized posterior distribution, with uncertainties corresponding to the |$16^\\text{th}$| and |$84^\\text{th}$| percentiles.

Table 2.

Inferred median and |$1\\sigma$| credible intervals for the parameters of our fiducial model.

Parameter

Posterior (median with |$1\\sigma$| uncertainties)

_i_|$\[^{\\circ }\]$|

|$65^{+15}\_{-11}$|

|$\\beta \_\\text{star}$|

|$0.07^{+0.06}\_{-0.10}$|

|$\\Upsilon \_\\star$||$\\left\[M\_{\\odot }/L\_{\\odot }\\right\]$|

|$3.13^{+0.25}\_{-0.26}$|

|$\\log \_{10}\\left(\\frac{\\rho \_s}{M\_\\odot \\text{pc}^{-3}}\\right)$|

|$-2.38^{+0.01}\_{-0.01}$|

|$q\_\\text{DM}$|

|$0.98^{+0.01}\_{-0.02}$|

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

|$10.56^{+0.07}\_{-0.08}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.01^{+0.01}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.05^{+0.01}\_{-0.01}$|

|$M\_\\text{Ein}\\left\[{M\_{\\odot }}/{10^{12}}\\right\]$|

|$5.45^{+0.02}\_{-0.03}$|

Parameter

Posterior (median with |$1\\sigma$| uncertainties)

_i_|$\[^{\\circ }\]$|

|$65^{+15}\_{-11}$|

|$\\beta \_\\text{star}$|

|$0.07^{+0.06}\_{-0.10}$|

|$\\Upsilon \_\\star$||$\\left\[M\_{\\odot }/L\_{\\odot }\\right\]$|

|$3.13^{+0.25}\_{-0.26}$|

|$\\log \_{10}\\left(\\frac{\\rho \_s}{M\_\\odot \\text{pc}^{-3}}\\right)$|

|$-2.38^{+0.01}\_{-0.01}$|

|$q\_\\text{DM}$|

|$0.98^{+0.01}\_{-0.02}$|

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

|$10.56^{+0.07}\_{-0.08}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.01^{+0.01}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.05^{+0.01}\_{-0.01}$|

|$M\_\\text{Ein}\\left\[{M\_{\\odot }}/{10^{12}}\\right\]$|

|$5.45^{+0.02}\_{-0.03}$|

Table 2.

Inferred median and |$1\\sigma$| credible intervals for the parameters of our fiducial model.

Parameter

Posterior (median with |$1\\sigma$| uncertainties)

_i_|$\[^{\\circ }\]$|

|$65^{+15}\_{-11}$|

|$\\beta \_\\text{star}$|

|$0.07^{+0.06}\_{-0.10}$|

|$\\Upsilon \_\\star$||$\\left\[M\_{\\odot }/L\_{\\odot }\\right\]$|

|$3.13^{+0.25}\_{-0.26}$|

|$\\log \_{10}\\left(\\frac{\\rho \_s}{M\_\\odot \\text{pc}^{-3}}\\right)$|

|$-2.38^{+0.01}\_{-0.01}$|

|$q\_\\text{DM}$|

|$0.98^{+0.01}\_{-0.02}$|

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

|$10.56^{+0.07}\_{-0.08}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.01^{+0.01}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.05^{+0.01}\_{-0.01}$|

|$M\_\\text{Ein}\\left\[{M\_{\\odot }}/{10^{12}}\\right\]$|

|$5.45^{+0.02}\_{-0.03}$|

Parameter

Posterior (median with |$1\\sigma$| uncertainties)

_i_|$\[^{\\circ }\]$|

|$65^{+15}\_{-11}$|

|$\\beta \_\\text{star}$|

|$0.07^{+0.06}\_{-0.10}$|

|$\\Upsilon \_\\star$||$\\left\[M\_{\\odot }/L\_{\\odot }\\right\]$|

|$3.13^{+0.25}\_{-0.26}$|

|$\\log \_{10}\\left(\\frac{\\rho \_s}{M\_\\odot \\text{pc}^{-3}}\\right)$|

|$-2.38^{+0.01}\_{-0.01}$|

|$q\_\\text{DM}$|

|$0.98^{+0.01}\_{-0.02}$|

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

|$10.56^{+0.07}\_{-0.08}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.01^{+0.01}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.05^{+0.01}\_{-0.01}$|

|$M\_\\text{Ein}\\left\[{M\_{\\odot }}/{10^{12}}\\right\]$|

|$5.45^{+0.02}\_{-0.03}$|

Table 3.

Joint fiducial and alternative mass models. The columns, from left to right, are model name identification, mass model configuration, median of the SMBH mass posterior distribution, the difference in the natural logarithm of the Bayesian evidences relative to the fiducial model (**M1**), section where the model is discussed, and the total number of free parameters in the mass model. Superscripts on the left side means the number of free components, i.e. |$^3\\beta \_\\text{star}$| implies three free anisotropy parameters.

Model ID

Mass model

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

|$\\Delta \\ln {\\mathcal {Z}}$|

Section

|$N\_\\text{par}$|

**M1**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.56^{+0.07}\_{-0.08}$|

0.00

[4.1](#sec4-1)

8

**M2**

|$\\Upsilon \_\\star$| + ell. gNFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.57^{+0.07}\_{-0.09}$|

–0.53

[4.2.1](#sec4-2-1)

9

**M3**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$^3\\beta \_\\text{star}$| + BH

|$10.45^{+0.11}\_{-0.14}$|

–3.48

[4.2.1](#sec4-2-1)

10

**M4**

|$^3\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.53^{+0.10}\_{-0.11}$|

2.01

[4.2.1](#sec4-2-1)

10

**M5**

|$\\Upsilon \_\\star$| + ell. NFW + |$\\beta \_\\text{star}$| + BH

|$10.56^{+0.08}\_{-0.08}$|

–0.38

[4.2.1](#sec4-2-1)

9

**M6**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/ cyl. velocity ellipsoids

|$10.55^{+0.08}\_{-0.09}$|

–0.36

[4.2.1](#sec4-2-1)

8

**M7**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/ Delaunay pixelization

|$10.55^{+0.08}\_{-0.08}$|

–2.27

[4.2.1](#sec4-2-1)

8

**M8**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/o Horseshoe

|$10.51^{+0.07}\_{-0.09}$|

0.38

[4.2.1](#sec4-2-1)

8

**M9**

|$^3\\Upsilon \_\\star$| + ell. gNFW (⁠|$r\_s=10R\_e$|⁠) + |$^3\\beta \_\\text{star}$| + BH

|$10.50^{+0.10}\_{-0.32}$|

8.29

[4.2.2](#sec4-2-2)

13

**M10**

Gaussian |$\\Upsilon \_\\star$| + sph. NFW (⁠|$r\_s=10R\_e$|⁠) + |$^8\\beta \_\\text{star}$| + BH

|$10.55^{+0.10}\_{-0.07}$|

1.17

[4.2.2](#sec4-2-2)

16

**M11**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ main |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.15^{+0.17}\_{-0.30}$|

2.92

[4.2.2](#sec4-2-2)

13

**M12**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ |$1\\sigma$| below |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.33^{+0.07}\_{-0.13}$|

10.73

[4.2.2](#sec4-2-2)

13

**M13**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ |$1\\sigma$| above |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.59^{+0.04}\_{-0.10}$|

11.48

[4.2.2](#sec4-2-2)

13

**M14**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$|

\-

16.31

[4.3](#sec4-3)

7

**M15**

|$^3\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$|

\-

11.17

[4.3](#sec4-3)

9

Model ID

Mass model

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

|$\\Delta \\ln {\\mathcal {Z}}$|

Section

|$N\_\\text{par}$|

**M1**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.56^{+0.07}\_{-0.08}$|

0.00

[4.1](#sec4-1)

8

**M2**

|$\\Upsilon \_\\star$| + ell. gNFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.57^{+0.07}\_{-0.09}$|

–0.53

[4.2.1](#sec4-2-1)

9

**M3**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$^3\\beta \_\\text{star}$| + BH

|$10.45^{+0.11}\_{-0.14}$|

–3.48

[4.2.1](#sec4-2-1)

10

**M4**

|$^3\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.53^{+0.10}\_{-0.11}$|

2.01

[4.2.1](#sec4-2-1)

10

**M5**

|$\\Upsilon \_\\star$| + ell. NFW + |$\\beta \_\\text{star}$| + BH

|$10.56^{+0.08}\_{-0.08}$|

–0.38

[4.2.1](#sec4-2-1)

9

**M6**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/ cyl. velocity ellipsoids

|$10.55^{+0.08}\_{-0.09}$|

–0.36

[4.2.1](#sec4-2-1)

8

**M7**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/ Delaunay pixelization

|$10.55^{+0.08}\_{-0.08}$|

–2.27

[4.2.1](#sec4-2-1)

8

**M8**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/o Horseshoe

|$10.51^{+0.07}\_{-0.09}$|

0.38

[4.2.1](#sec4-2-1)

8

**M9**

|$^3\\Upsilon \_\\star$| + ell. gNFW (⁠|$r\_s=10R\_e$|⁠) + |$^3\\beta \_\\text{star}$| + BH

|$10.50^{+0.10}\_{-0.32}$|

8.29

[4.2.2](#sec4-2-2)

13

**M10**

Gaussian |$\\Upsilon \_\\star$| + sph. NFW (⁠|$r\_s=10R\_e$|⁠) + |$^8\\beta \_\\text{star}$| + BH

|$10.55^{+0.10}\_{-0.07}$|

1.17

[4.2.2](#sec4-2-2)

16

**M11**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ main |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.15^{+0.17}\_{-0.30}$|

2.92

[4.2.2](#sec4-2-2)

13

**M12**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ |$1\\sigma$| below |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.33^{+0.07}\_{-0.13}$|

10.73

[4.2.2](#sec4-2-2)

13

**M13**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ |$1\\sigma$| above |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.59^{+0.04}\_{-0.10}$|

11.48

[4.2.2](#sec4-2-2)

13

**M14**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$|

\-

16.31

[4.3](#sec4-3)

7

**M15**

|$^3\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$|

\-

11.17

[4.3](#sec4-3)

9

Table 3.

Joint fiducial and alternative mass models. The columns, from left to right, are model name identification, mass model configuration, median of the SMBH mass posterior distribution, the difference in the natural logarithm of the Bayesian evidences relative to the fiducial model (**M1**), section where the model is discussed, and the total number of free parameters in the mass model. Superscripts on the left side means the number of free components, i.e. |$^3\\beta \_\\text{star}$| implies three free anisotropy parameters.

Model ID

Mass model

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

|$\\Delta \\ln {\\mathcal {Z}}$|

Section

|$N\_\\text{par}$|

**M1**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.56^{+0.07}\_{-0.08}$|

0.00

[4.1](#sec4-1)

8

**M2**

|$\\Upsilon \_\\star$| + ell. gNFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.57^{+0.07}\_{-0.09}$|

–0.53

[4.2.1](#sec4-2-1)

9

**M3**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$^3\\beta \_\\text{star}$| + BH

|$10.45^{+0.11}\_{-0.14}$|

–3.48

[4.2.1](#sec4-2-1)

10

**M4**

|$^3\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.53^{+0.10}\_{-0.11}$|

2.01

[4.2.1](#sec4-2-1)

10

**M5**

|$\\Upsilon \_\\star$| + ell. NFW + |$\\beta \_\\text{star}$| + BH

|$10.56^{+0.08}\_{-0.08}$|

–0.38

[4.2.1](#sec4-2-1)

9

**M6**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/ cyl. velocity ellipsoids

|$10.55^{+0.08}\_{-0.09}$|

–0.36

[4.2.1](#sec4-2-1)

8

**M7**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/ Delaunay pixelization

|$10.55^{+0.08}\_{-0.08}$|

–2.27

[4.2.1](#sec4-2-1)

8

**M8**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/o Horseshoe

|$10.51^{+0.07}\_{-0.09}$|

0.38

[4.2.1](#sec4-2-1)

8

**M9**

|$^3\\Upsilon \_\\star$| + ell. gNFW (⁠|$r\_s=10R\_e$|⁠) + |$^3\\beta \_\\text{star}$| + BH

|$10.50^{+0.10}\_{-0.32}$|

8.29

[4.2.2](#sec4-2-2)

13

**M10**

Gaussian |$\\Upsilon \_\\star$| + sph. NFW (⁠|$r\_s=10R\_e$|⁠) + |$^8\\beta \_\\text{star}$| + BH

|$10.55^{+0.10}\_{-0.07}$|

1.17

[4.2.2](#sec4-2-2)

16

**M11**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ main |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.15^{+0.17}\_{-0.30}$|

2.92

[4.2.2](#sec4-2-2)

13

**M12**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ |$1\\sigma$| below |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.33^{+0.07}\_{-0.13}$|

10.73

[4.2.2](#sec4-2-2)

13

**M13**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ |$1\\sigma$| above |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.59^{+0.04}\_{-0.10}$|

11.48

[4.2.2](#sec4-2-2)

13

**M14**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$|

\-

16.31

[4.3](#sec4-3)

7

**M15**

|$^3\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$|

\-

11.17

[4.3](#sec4-3)

9

Model ID

Mass model

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

|$\\Delta \\ln {\\mathcal {Z}}$|

Section

|$N\_\\text{par}$|

**M1**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.56^{+0.07}\_{-0.08}$|

0.00

[4.1](#sec4-1)

8

**M2**

|$\\Upsilon \_\\star$| + ell. gNFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.57^{+0.07}\_{-0.09}$|

–0.53

[4.2.1](#sec4-2-1)

9

**M3**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$^3\\beta \_\\text{star}$| + BH

|$10.45^{+0.11}\_{-0.14}$|

–3.48

[4.2.1](#sec4-2-1)

10

**M4**

|$^3\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH

|$10.53^{+0.10}\_{-0.11}$|

2.01

[4.2.1](#sec4-2-1)

10

**M5**

|$\\Upsilon \_\\star$| + ell. NFW + |$\\beta \_\\text{star}$| + BH

|$10.56^{+0.08}\_{-0.08}$|

–0.38

[4.2.1](#sec4-2-1)

9

**M6**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/ cyl. velocity ellipsoids

|$10.55^{+0.08}\_{-0.09}$|

–0.36

[4.2.1](#sec4-2-1)

8

**M7**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/ Delaunay pixelization

|$10.55^{+0.08}\_{-0.08}$|

–2.27

[4.2.1](#sec4-2-1)

8

**M8**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$| + BH w/o Horseshoe

|$10.51^{+0.07}\_{-0.09}$|

0.38

[4.2.1](#sec4-2-1)

8

**M9**

|$^3\\Upsilon \_\\star$| + ell. gNFW (⁠|$r\_s=10R\_e$|⁠) + |$^3\\beta \_\\text{star}$| + BH

|$10.50^{+0.10}\_{-0.32}$|

8.29

[4.2.2](#sec4-2-2)

13

**M10**

Gaussian |$\\Upsilon \_\\star$| + sph. NFW (⁠|$r\_s=10R\_e$|⁠) + |$^8\\beta \_\\text{star}$| + BH

|$10.55^{+0.10}\_{-0.07}$|

1.17

[4.2.2](#sec4-2-2)

16

**M11**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ main |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.15^{+0.17}\_{-0.30}$|

2.92

[4.2.2](#sec4-2-2)

13

**M12**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ |$1\\sigma$| below |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.33^{+0.07}\_{-0.13}$|

10.73

[4.2.2](#sec4-2-2)

13

**M13**

|$^3\\Upsilon \_\\star$| + ell. gNFW w/ |$1\\sigma$| above |$c(M, z)$| + |$^3\\beta \_\\text{star}$| + BH

|$10.59^{+0.04}\_{-0.10}$|

11.48

[4.2.2](#sec4-2-2)

13

**M14**

|$\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$|

\-

16.31

[4.3](#sec4-3)

7

**M15**

|$^3\\Upsilon \_\\star$| + ell. NFW (⁠|$r\_s=10R\_e$|⁠) + |$\\beta \_\\text{star}$|

\-

11.17

[4.3](#sec4-3)

9

### 4.1 Fiducial model

The fiducial model (**M1**) is composed by a stellar mass component, an elliptical NFW.12 halo, and a central SMBH.

We assume that the stellar component follows the observed surface brightness distribution of the main-lens, scaled by a constant |$\\Upsilon \_\\star$|⁠. The DM component is assumed to be concentric with the baryonic matter and have the same alignment. Additionally, the scale radius |$r\_s$| is fixed at 10 times the stellar effective radius, as seen in simulations (e.g. Kravtsov 2013) and used in other SGL studies (e.g. Sonnenfeld et al. 2015).

Beyond the mass parameters, the fiducial model includes four additional parameters: two elliptical components |$(\\epsilon ^{\\text{sh}}\_1, \\epsilon ^{\\text{sh}}\_2)$| that describe the external lensing shear; a constant stellar anisotropy parameter, |$\\beta \_\\text{star}$|⁠; and the inclination angle, _i_, of the lens relative to the LOS. Therefore, the fiducial model has eight parameters: |$\\left(i, \\beta \_\\text{star}, \\Upsilon \_\\star , \\log \_{10}{\\rho \_s}, q\_\\text{DM}, \\log \_{10}{M\_\\text{BH}}, \\epsilon ^{\\text{sh}}\_1, \\epsilon ^{\\text{sh}}\_2\\right)$|⁠.

The median of the one-dimensional marginalized posterior of the fiducial model and their uncertainties are summarized in Table 2\. Fig. 4 presents the two-dimensional posterior distributions for the SMBH mass and other parameters that exhibit significant degeneracies with it.

![Two-dimensional posterior distributions for the parameters of the fiducial model. Only parameters that show a strong degeneracy with the SMBH mass are displayed. The inset plot on the top-right present the covariance between the SMBH mass and Einstein mass within the Cosmic Horseshoe ring. Contours are the 1 and $2\sigma$ credible intervals, respectively.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig4.jpeg?Expires=1757949012&Signature=Qa6Xk-7fbSnz~rFpVMyzcVI42gibKIAh0S6eDQmqbrzLTu4cIYRiixkaGO3rjGluoyBAp1v3zyPOvwW7afXCJsPGLoEF3UvbWzmmgOkmwLqYVByrLMvFEf-UPwTClQ0N90I5xyGRrXShuAHDhchxNu8eSlSLLRpfNVDtXh6iFhZNd8SBGrzRLhOAyWB9ZsbaSeLql6rTumOaNzoNLFZuyVfMrgNHRnFkW6imvOTNfZgoVzE4lrBvVxC8X2Bphqh7wpABQIoIDMllKnvOvtLTO5qzfiim5Wcrn1BXJJdQ1b2To4k2LRoIM9Z8LYbOypiI8Y2qKfWZBeECU1NBJroO3Q__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 4.

Two-dimensional posterior distributions for the parameters of the fiducial model. Only parameters that show a strong degeneracy with the SMBH mass are displayed. The inset plot on the top-right present the covariance between the SMBH mass and Einstein mass within the Cosmic Horseshoe ring. Contours are the 1 and |$2\\sigma$| credible intervals, respectively.

Our fiducial model favours an SMBH mass of |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.56^{+0.07}\_{-0.08}$|⁠, therefore an UMBH. The SMBH mass shows a notable degeneracy with the mass-to-light ratio and the DM characteristic density, as shown in Fig. 4\. However, no significant degeneracy was observed between the SMBH mass and the anisotropy parameter. Similarly, the Einstein mass within the Cosmic Horseshoe, |$M\_\\text{Ein}$|⁠, does not exhibit a strong degeneracy with |$M\_\\text{BH}$| – top-right inset plot in Fig. 4.

The median stellar mass-to-light ratio, |$\\Upsilon \_\\star = 3.13^{+0.25}\_{-0.26} M\_{\\odot }/L\_{\\odot }$|⁠, is in agreement with values inferred from stellar population synthesis models of other ETGs (e.g. Conroy & van Dokkum 2012; Gu et al. 2022). This is a reasonable value for a massive elliptical galaxy: the expected value is |$\\sim 4 M\_{\\odot }/L\_{\\odot }$| for a simple stellar population with an age of 10 Gyr and solar metallicity (Ricciardelli et al. 2012; Vazdekis et al. 2012; Verro et al. 2022).

We recovered a total projected mass within |$R\_\\text{Ein}$| of |$M\_\\text{Ein} = 5.45^{+0.02}\_{-0.03}\\times 10^{12}M\_{\\odot }$|⁠, consistent with our prior and the EPL model, albeit slightly higher than the value reported by Dye et al. (2008) and Schuldt et al. (2019). The DM fraction within |$R\_e$| was found to be |$f\_\\text{DM}(\\le R\_e) = 0.72^{+0.02}\_{-0.02}$|⁠, which is also higher than Schuldt et al. (2019) and Spiniello et al. (2011), though it remains consistent within the |$1\\sigma$| range.

Fig. 5 shows the highest-likelihood lens model, alongside the normalized residuals and the source plane reconstruction of source s1 at |$z\_{s1}=1.961$|⁠. Our model successfully reproduces the radial arc and its counter-image, while reconstructing the source’s surface brightness, which exhibits an irregular morphology.

![Highest-likelihood lens model under the fiducial configuration. The panels, from top left to bottom right, show the observed image, lensed source model, normalized residuals, and source reconstruction. All images are in units of electrons per second.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig5.jpeg?Expires=1757949012&Signature=vNoyBe-2~LcNEHF75DRqExgiQp~GBP6ljeqQlLV45AlSUgcKjhGertZnHxhUR4W5l60Apeo4XHy1mv4lci5yTaPKeJyCivBnv4TmmGmfIXG9NHuSvF3zkPN429xHIwYyknCd~FfkE8EKSZ6ZXxyDG05wVdIOWSaT0DMVHZdjFasoh5Xnvxvxkr9WArq3lfRwZpyDX4Ag8qS2FJfnQ5JAb0vTfanJA1Ab9HtKNzkUFdmEWu1nLFHxseReGN4ObXXa84aCv6TnIThjv0kXanzL3ILQlTdwSc9CPn7pBASLXWQTfAHyRF74IWvcK7e~KNEyeY7D5rHn~cEtCBdsg8AMJA__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 5.

Highest-likelihood lens model under the fiducial configuration. The panels, from top left to bottom right, show the observed image, lensed source model, normalized residuals, and source reconstruction. All images are in units of electrons per second.

In Fig. 2, we present the results of the dynamical modelling. The top row displays the observed Voronoi-binned kinematic map, the median dynamical model, and the normalized residuals. Although the model exhibits a small squashing of the kinematic map along the semimajor axis, the radial profile (bottom panel) indicates a good fit to the data. Furthermore, the model was able to reproduce the observed trend found in other BCGs (e.g. Smith et al. 2017b), where the kinematic profile flattens in the central regions and rises towards the edges.

### 4.2 Alternative mass models

To assess the robustness of our SMBH detection, we now investigate a range of alternative mass models. We first consider perturbations to our fiducial model and subsequently explore more flexible configurations. For each alternative model, we ran the full non-linear sampling again, following the steps outlined in Section [3.5](#sec3-5). Table 3 summarizes the various mass models considered and their inferred SMBH masses, along with their corresponding Bayesian evidence relative to the fiducial model.

We present the medians and uncertainties of all posterior distributions in Appendix  [D](#sec12).

#### 4.2.1 Fiducial model perturbations

In this section, we investigate how perturbations around the fiducial model impact the outcomes. All |$M\_\\text{BH}$| from these model perturbations are summarized in Table 3.

_gNFW profile_: In our fiducial model **M1**, we considered an NFW halo for which the inner density slope is fixed. However, a steeper DM density profile, in the inner regions, could potentially compensate for the SMBH mass, leading to a more cuspy rather than cored DM distribution. To explore this possibility, we considered an alternative model (**M2**) in which the DM halo is parametrized by a gNFW profile, allowing the inner density slope, |$\\gamma \_\\text{DM}$|⁠, to vary.

Fig. 6 shows the two-dimensional posterior distributions for the SMBH mass, the DM density slope, and the Einstein mass, with the median values of the fiducial model indicated by brown dashed lines. We can see that |$\\gamma \_\\text{DM}$| exhibits only a modest degeneracy with |$M\_\\text{BH}$| and a marginal degeneracy with the Einstein mass. Furthermore, the DM inner density slope was found to be |$\\gamma \_\\text{DM} = 1.06^{+0.05}\_{-0.07}$|⁠, in agreement with an NFW profile. The SMBH mass is consistent with the fiducial model within |$2\\sigma$|⁠.

![Two-dimensional posterior distributions for the parameters of model M2, which differs from the fiducial model by assuming a gNFW halo. Only the inner DM density slope, the SMBH mass, and the Einstein mass are displayed. The brown dashed lines show the posterior median of the fiducial model for comparison. Contours are the 1σ and $2\sigma$ credible intervals, respectively.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig6.jpeg?Expires=1757949012&Signature=JiTJWJDxuPBJeBxowMUOx69EzpUpYNSyjhF~z0ep9G4b4zWFwcyPNeVj4ADb0zv0xqkXT174eaim5LwNytWMAm~fZWU9vfy2GdKDex-gzDMv5Q-2~ybJ9bCv-VezWBTI8-y3jYGMYbihKnQUqC2xyFS~81RMkQwwLVym9g04KDVvE60HItbE8kSTmXWQOYn~~B0niMvxMu2Yw-KkdvQUmp8Pv~18usCR0C7vIfx2vB6gwIfa7LHAtB0MgF5oxuT09skGVckVcOn-wUA-MLZC7eXLEcxH7OWjvUsyJvkoiocFJI13SvNMzayAPoPbCl3q9txYq3fTrzfdfEPyb1aHMw__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 6.

Two-dimensional posterior distributions for the parameters of model **M2**, which differs from the fiducial model by assuming a gNFW halo. Only the inner DM density slope, the SMBH mass, and the Einstein mass are displayed. The brown dashed lines show the posterior median of the fiducial model for comparison. Contours are the 1σ and |$2\\sigma$| credible intervals, respectively.

_Variable anisotropy profile_: Next, we explored the possibility of a variable anisotropy profile. As shown by Thomas et al. (2014), massive ETGs hosting SMBHs often exhibit a radial variation in the anisotropy parameter, |$\\beta \_\\text{star}$|⁠. In particular, for core galaxies, stellar motions within the core radius tend to be dominated by tangential orbits (⁠|$\\beta \_\\text{star} < 0$|⁠), while outside the core, the orbits become more radially dominated (⁠|$\\beta \_\\text{star} > 0$|⁠).

To assess the impact of stellar anisotropy on |$M\_\\text{BH}$|⁠, we introduced a stellar anisotropy profile, |$\\beta \_\\text{star}(r)$|⁠, in model **M3**. This profile is constructed using the luminous MGE components (Cappellari 2008) to define regions with distinct anisotropy parameters. We used the Gaussian width as a proxy for the radius of influence of the parameter. Specifically:

*   Components with |$\\sigma \\le 0.1\\,\\,\\mathrm{ arcsec}$| are assigned an anisotropy |$\\beta ^0\_\\text{star}$|⁠,
    
*   Components with |$0.1 \\,\\,\\mathrm{ arcsec}< \\sigma \\le 1.0\\,\\,\\mathrm{ arcsec}$| are assigned |$\\beta ^1\_\\text{star}$|⁠, and
    
*   Components with |$\\sigma \\ge 1.0\\,\\,\\mathrm{ arcsec}$| are assigned |$\\beta ^2\_\\text{star}$|⁠.
    

Furthermore, we allowed each |$\\beta \_\\text{star}$| to be independent of each other. The rest of the mass model in **M3** remains identical to that of the fiducial model.

In Fig. 7, we present the stellar anisotropy profile for model **M3**, calculated following Cappellari (2008). Unlike other BCGs hosting central SMBHs, the anisotropy profile of our system near the galaxy centre is qualitatively distinct, showing no dominance of tangential orbits (e.g. Thomas et al. 2014; Mehrgan et al. 2019). It is worth noting, however, that we cannot resolve the galaxy core (if present), where tangential orbits are typically expected. Moreover, the uncertainties near the centre suggest that |$\\beta \_\\text{star}$| could also assume negative values in this region. Despite that, the radial variation observed in our profile is broadly consistent with findings by Gerhard et al. (2001) in elliptical galaxies and with simulations of massive ETGs (Wu et al. 2014). The SMBH mass derived from this model is slightly lower (see Table 3) than the value obtained from the fiducial model, but remains within the |$1\\sigma$| confidence level.

![M3 anisotropy profile. The solid line shows the orbital anisotropy profile of the stars, and the grey band represents the $1\sigma$ credible band. The brown point is the constant anisotropy inferred by the fiducial model M1, with its associated error bar. The horizontal dashed line corresponds to the isotropic case.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig7.jpeg?Expires=1757949012&Signature=R7u4766e7-SxeUUaKzNO1aAy5clfXixagJsZrfhFApy0gXMnubB-asd13U~qi9vvawJMpUPTEadSyMW22roDyj7g7hQ0kcb4auOXrhR1w47RgtC5gRUWww-m4GTzgsglWQ6EF8vjvOIJ~uY9uuK0nJIuWbQK50v7Pl7cuAhtT7nsDg7eCAAnIY3zksPHXOpikUwZaN4IADMrsXhH-qx1w9wmSk4ewvT7QyUlclefvk6HvdabiUgfjGguZWD8S-EhFRQlAuiK1g9xoCdgcUBE8QI1j3f0QVAcCb8mvbS8eEZptF5yeX7z~OrNwz3GXAg6QYPYF~5Xp1LX0fSTRPc5Bg__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 7.

**M3** anisotropy profile. The solid line shows the orbital anisotropy profile of the stars, and the grey band represents the |$1\\sigma$| credible band. The brown point is the constant anisotropy inferred by the fiducial model **M1**, with its associated error bar. The horizontal dashed line corresponds to the isotropic case.

_Varying mass-to-light ratio_: Another way to account for the SMBH mass is by increasing the stellar mass at the galaxy’s centre, representing an excess mass linked to a gradient in the stellar mass-to-light ratio (e.g. Smith et al. 2017a). To test this hypothesis, in model **M4**, we allowed the mass-to-light ratio to vary across different sets of Gaussian components. As in model **M3**, we defined the mass-to-light ratio for each luminous Gaussian component based on the Gaussian width, applying the same width constraints. This set-up resulted in three distinct mass-to-light ratios (⁠|$\\Upsilon ^0\_\\star , \\Upsilon ^1\_\\star , \\Upsilon ^2\_\\star$|⁠), which were constrained during the non-linear sampling to follow a decreasing gradient with radius.

In Fig. 8, we present the two-dimensional posterior distributions for |$M\_\\text{BH}$| and the three mass-to-light ratios in model **M4**. The top-right inset plot compares the mass-to-light ratio profiles of **M1** and **M4**. The gradient profile of model **M4** is shown in black, while the constant profile of the fiducial model is shown in brown. Although model **M4** suggests a radial gradient, the large uncertainties make it consistent with the constant value recovered by the fiducial model. By this figure, it is clear the strong degeneracy between these parameters. Despite that, the recovered value of |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.53^{+0.10}\_{-0.11}$|⁠, is consistent with the fiducial model within |$1\\sigma$|⁠.

![Two-dimensional posterior distributions for the parameters of model M4, which differs from the fiducial model by a gradient mass-to-light ratio. Only the three mass-to-light ratios, the SMBH mass, and the Einstein mass are displayed. The brown dashed lines show the posterior median of the fiducial model for comparison. Contours are the 1σ and $2\sigma$ credible intervals, respectively. The top-right inset shows the projected radial stellar mass-to-light profiles for the fiducial model (brown) and model M4 in black. The shaded regions are the $1\sigma$ level.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig8.jpeg?Expires=1757949012&Signature=ymp6nmSqx8FKfkHgTUDzLlMeB9bDNKqWOOrU98lnIe5Oj3uT1zrWOV-vaSlT-ShnT86C9P~gdBu9wFvIu7EOFSB23b1Emd7ikpFsWROnA~w2-WqY3pMBYXAnEWRyyCpgHyQ26QXrHaBQn4c7ownlAff~l0033NBJJqxwPKxNspHt6kMbBWjQC3L69PKIrEEtTh2yIDvyUIdDp9KuR8wpIBHGLGbgHxebK6BCcrDbWzr7HCxu60j6ehMAvlKgADzKkyUvK7ibAmbaQ4kFr735pbwlvxAPkul2Gi2zgaStG~LETSlQLVi5ua63ne~i-EgBH65oKiP8DftgMqM9pQG-sQ__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 8.

Two-dimensional posterior distributions for the parameters of model **M4**, which differs from the fiducial model by a gradient mass-to-light ratio. Only the three mass-to-light ratios, the SMBH mass, and the Einstein mass are displayed. The brown dashed lines show the posterior median of the fiducial model for comparison. Contours are the 1σ and |$2\\sigma$| credible intervals, respectively. The top-right inset shows the projected radial stellar mass-to-light profiles for the fiducial model (brown) and model **M4** in black. The shaded regions are the |$1\\sigma$| level.

_DM scale radius_: In the fiducial model, we assume a DM scale radius fixed at ten times the galaxy’s effective radius, and although motivated by simulations, such rigid constraints could bias the results. To evaluate the impact of this assumption, in model **M5** we allowed the scale radius to vary. This model recovered a scale radius of |$r\_s = 19.16^{+2.30}\_{-0.97}$| arcsec, interestingly consistent with the fiducial model’s assumption (⁠|$r\_s = 21$| arcsec). Moreover, the SMBH mass (see Table 3) remains consistent with the fiducial value within |$1\\sigma .$|

_Modelling choices_: There are three other sources of systematics linked to the fiducial model. First, the alignment of the velocity ellipsoid, which is assumed to align with the spherical coordinate system. Second, the source plane pixelization grid, which is based on a Voronoi tessellation. And third, the use of the prior on the total projected mass within the Cosmic Horseshoe Einstein ring.

In model **M6**, we test the effect of a cylindrical alignment (Cappellari 2008) for the velocity ellipsoid, while in model **M7**, we change the source plane pixelization from a Voronoi to a Delaunay tessellation. In both cases, we recover SMBH masses that agree with the fiducial model within the |$1\\sigma$| level.

Finally, we assess the impact of the prior on the total projected mass within the Einstein radius of s2 by removing this constraint in model **M8**. This model leads to |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.51^{+0.07}\_{-0.09}$|⁠, showing that the prior has a minimum impact on the determination of the SMBH mass.

#### 4.2.2 More flexible mass models

We now explore more flexible mass models to assess whether increased freedom in the mass distribution can account for the high SMBH mass inferred in our fiducial model.

In model **M9** we assumed a gradient mass-to-light ratio, defined the same way as in model **M4**. Additionally, we considered an anisotropy profile with three independents anisotropy parameters, as in model **M3**. We also considered an gNFW profile for the halo mass, and as before we kept the scale radius fixed at ten times |$R\_e$|⁠. For model **M9**, we found |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.50^{+0.10}\_{-0.32}$|⁠. For this model, we also recovered a DM inner slope of |$\\gamma \_\\text{DM} = 1.08^{+0.06}\_{-0.07}$|⁠, which still consistent with a NFW profile.

In model **M10**, we introduced a more flexible mass-to-light ratio profile by parametrizing it as a Gaussian-modulated function:

$$\\begin{eqnarray} \\Upsilon ^j\_\\star = \\Upsilon \_0 \\left\[\\upsilon \_0 + (1-\\upsilon \_0)e^{ -0.5 (\\sigma \_j \\, \\delta)^2}\\right\], \\end{eqnarray}$$

(17)

where |$\\Upsilon \_0$| is the central stellar mass-to-light ratio, |$\\delta$| is a gradient parameter describing the profile’s smoothness, |$\\upsilon \_0$| is the ratio between the central and outermost values, and |$\\sigma \_j$| represents the dispersion of the |$j^{\\text{th}}$| MGE component. This approach enables each luminous Gaussian to have its unique |$\\Upsilon ^j\_\\star$|⁠, while maintaining a small number of free parameters |$(\\Upsilon \_0, \\upsilon \_0, \\delta)$| and ensuring a naturally decreasing profile.

Further, model **M10** incorporates additional freedom by assigning each luminous Gaussian its own anisotropy parameter. The DM halo is modelled as a spherical NFW profile with the scale radius fixed to the fiducial model. With this configuration, we recover an SMBH mass of |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.55^{+0.10}\_{-0.07}$|⁠.

The final set of models explores the impact of adopting the mass-concentration relation from Ludlow et al. (2016) to define the DM scale radius of a gNFW profile. In these models, the DM characteristic density is parametrized by the mass at 200 times the critical density of the Universe, |$M^\\text{DM}\_{200}$|⁠, which is treated as a free parameter. Using |$M^\\text{DM}\_{200}$|⁠, the DM scale radius is derived based on the main relation from Ludlow et al. (2016), as well as the |$1\\sigma$| scatter above and below it. The anisotropy profile is set as in model **M3**, while the mass-to-light ratio is parametrized as in model **M4**. For these models, we found that:

*   Model **M11** assuming the main mass-concentration relation, yields an SMBH mass of |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.15^{+0.17}\_{-0.30}$|⁠.
    
*   Model **M12** applies the |$1\\sigma$| below the mean relation, resulting in |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.33^{+0.07}\_{-0.13}$|⁠.
    
*   Model **M13** adopts the |$1\\sigma$| above the mean relation, recovering |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.59^{+0.04}\_{-0.10}$|⁠.
    

These results, once more, highlight the robustness of the fiducial model, as they agree with the fiducial model within the uncertainties.

### 4.3 Is an SMBH necessary?

So far, we only fit models with a presence of an SMBH, and despite the many variations of the mass profile, our results are fairly consistent between each other. However, one might question whether an SMBH is necessary to explain the observed data. To answer this question, we fitted model **M14** using the same fiducial mass model, but without including the SMBH component.

Fig. 9 shows the highest-likelihood lens model in the upper panels, and the dynamical model in the bottom panels for model **M14**. Qualitatively, the fiducial lens model and the **M14** lens model are very similar. Both are able to reproduce the observed data with similar residuals, and to reconstruct the source with close morphologies. On the other hand, the dynamical model fit the data poorly, especially at the central regions, where the SMBH presence is expected to be more relevant.

![Model results of mass configuration M14, which differs from the fiducial model by not including an SMBH. The upper panels display, left to right, the highest-likelihood lens model, the normalized residuals, and the source reconstruction. The bottom panels are, left to right, the median dynamical model, the normalized residuals, and the radial kinematic profile with the median model. All top images are in units of electrons per second.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig9.jpeg?Expires=1757949012&Signature=z7aNJbhGYOngjGByHUqfk3hYFNTfjR8RrkPm0Ddm15ArmRJT0DvG0i4Qy3tFJdC~Zvw1bEAoqItbFa19qXvDChmfi3chqRhDqbUCACt9sMtI8wEKxekAWwJMA4~559sEXhmCfkzHLWrlu5TXat75YKEPo4L5rZYxbsx5LunFLUfXdERVQobz~ncMJF6WN4oqP1sMAGT49JTMASrp22of9qwRI26KDG7A82J7exunrp0TAQWuThER3cfEpHWfDxdBR9Lv6vsK1CUsfd~qT7Mg14US3haOQaFDVK113UqKQBv9MsNS8bKqPPD4x32ULkux2hm~MXDhMS~3BPfdDS-gIQ__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 9.

Model results of mass configuration **M14**, which differs from the fiducial model by not including an SMBH. The upper panels display, left to right, the highest-likelihood lens model, the normalized residuals, and the source reconstruction. The bottom panels are, left to right, the median dynamical model, the normalized residuals, and the radial kinematic profile with the median model. All top images are in units of electrons per second.

We can also use the Bayesian evidence of the models to quantitatively assess the need of an SMBH. The third column of Table 3 summarizes the relative Bayesian evidence (⁠|$\\Delta \\ln {\\mathcal {Z}}$|⁠) for all models considered in this work, calculated with respect to the fiducial model. Comparing the fiducial model **M1** and model **M14**, which excludes the SMBH, we find a difference in the Bayesian evidence of |$\\Delta \\ln {\\mathcal {Z}} = 16.31$|⁠. This corresponds to a statistical preference exceeding |$5\\sigma$| in favour of the SMBH.13

We also attempt to fit model **M4** without the inclusion of an SMBH (**M15**) to evaluate whether the central mass-to-light component could replicate the SMBH’s contribution. In this configuration, the central Gaussian component is assigned its own |$\\Upsilon \_\\star$|⁠, potentially steepening the stellar mass density profile near the galaxy’s centre and compensating for the absence of the SMBH. However, as with model **M14**, this approach failed to reproduce the observed kinematical data accurately. A comparison of the Bayesian evidence for this model against the fiducial model yields |$\\Delta \\ln {\\mathcal {Z}} = 11.17$|⁠, strongly favouring the fiducial model. This difference corresponds to a |$5\\sigma$| detection of the SMBH.

### 4.4 The SMBH mass

In Table 3, we present the SMBH masses and relative (in respect to the fiducial model) Bayesian evidence for all the mass models in this work. The highest Bayesian evidence is associated with model **M3**, which incorporates a variable anisotropy profile. A comparison between the fiducial model **M1** and model **M3** yields |$\\Delta \\ln {\\mathcal {Z}} = -3.48$|⁠, corresponding to a |$0.9\\sigma$| preference to **M3**. This evidence difference is not decisive, and we do not have sufficient prior knowledge to say if one model should be astrophysically preferred over the other. Additionally, measuring the anisotropy profile is notoriously challenging due to its degeneracies with other parameters and sensitivity to data quality, which is why we adopted the fiducial model for its simplicity and robustness.

Given this result, we adopt the SMBH mass inferred by the fiducial model as our final value, and we take the scatter between the alternative mass as an estimate of the systematic uncertainty. Using the standard deviation across all SMBH mass measurements, our final inference is |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.56^{+0.07}\_{-0.08} \\pm (0.12)^{\\text{sys}}$| at |$1\\sigma$| level, confirming the detection of an UMBH in the Cosmic Horseshoe main-lens galaxy.

### 4.5 The role of the radial image

As we saw when comparing models **M1** and **M14**, the absence of the SMBH has a relatively modest effect on the lens model, but significantly impacts the fit to the kinematical data. This naturally raises the question of the role that lensing information plays in determining the SMBH mass in this case.

To explore this, we performed dynamical-only modelling for all the mass models listed in Table 3, and we show the resulting SMBH mass measurements in Table 4.

Table 4.

Dynamical models only SMBH results. Values are the median and |$1\\sigma$| uncertainties. Models **M7** and **M8** are not applicable.

Model ID

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

Model ID

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

**M1**

|$10.72^{+0.10}\_{-0.13}$|

**M9**

|$10.19^{+0.50}\_{-1.69}$|

**M2**

|$10.70^{+0.13}\_{-0.17}$|

**M10**

|$9.78^{+0.65}\_{-1.16}$|

**M3**

|$10.41^{+0.16}\_{-0.62}$|

**M11**

|$10.30^{+0.35}\_{-0.99}$|

**M4**

|$10.69^{+0.10}\_{-0.15}$|

**M12**

|$10.59^{+0.19}\_{-0.69}$|

**M5**

|$10.77^{+0.08}\_{-0.11}$|

**M13**

|$10.35^{+0.25}\_{-1.30}$|

**M6**

|$10.79^{+0.09}\_{-0.12}$|

 

 

Model ID

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

Model ID

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

**M1**

|$10.72^{+0.10}\_{-0.13}$|

**M9**

|$10.19^{+0.50}\_{-1.69}$|

**M2**

|$10.70^{+0.13}\_{-0.17}$|

**M10**

|$9.78^{+0.65}\_{-1.16}$|

**M3**

|$10.41^{+0.16}\_{-0.62}$|

**M11**

|$10.30^{+0.35}\_{-0.99}$|

**M4**

|$10.69^{+0.10}\_{-0.15}$|

**M12**

|$10.59^{+0.19}\_{-0.69}$|

**M5**

|$10.77^{+0.08}\_{-0.11}$|

**M13**

|$10.35^{+0.25}\_{-1.30}$|

**M6**

|$10.79^{+0.09}\_{-0.12}$|

 

 

Table 4.

Dynamical models only SMBH results. Values are the median and |$1\\sigma$| uncertainties. Models **M7** and **M8** are not applicable.

Model ID

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

Model ID

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

**M1**

|$10.72^{+0.10}\_{-0.13}$|

**M9**

|$10.19^{+0.50}\_{-1.69}$|

**M2**

|$10.70^{+0.13}\_{-0.17}$|

**M10**

|$9.78^{+0.65}\_{-1.16}$|

**M3**

|$10.41^{+0.16}\_{-0.62}$|

**M11**

|$10.30^{+0.35}\_{-0.99}$|

**M4**

|$10.69^{+0.10}\_{-0.15}$|

**M12**

|$10.59^{+0.19}\_{-0.69}$|

**M5**

|$10.77^{+0.08}\_{-0.11}$|

**M13**

|$10.35^{+0.25}\_{-1.30}$|

**M6**

|$10.79^{+0.09}\_{-0.12}$|

 

 

Model ID

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

Model ID

|$\\log \_{10}(M\_\\text{BH}/M\_{\\odot })$|

**M1**

|$10.72^{+0.10}\_{-0.13}$|

**M9**

|$10.19^{+0.50}\_{-1.69}$|

**M2**

|$10.70^{+0.13}\_{-0.17}$|

**M10**

|$9.78^{+0.65}\_{-1.16}$|

**M3**

|$10.41^{+0.16}\_{-0.62}$|

**M11**

|$10.30^{+0.35}\_{-0.99}$|

**M4**

|$10.69^{+0.10}\_{-0.15}$|

**M12**

|$10.59^{+0.19}\_{-0.69}$|

**M5**

|$10.77^{+0.08}\_{-0.11}$|

**M13**

|$10.35^{+0.25}\_{-1.30}$|

**M6**

|$10.79^{+0.09}\_{-0.12}$|

 

 

Comparing the jointly results with those obtained through dynamical-only modelling, we find that the latter, in general, yields more massive SMBH estimates. Additionally, the error bars for the dynamical-only models are larger, which is expected due to the smaller number of data points in the kinematic map. Using the same criteria as before to determine the final SMBH mass, the dynamical-only SMBH mass is |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.72^{+0.10}\_{-0.13} \\pm (0.30)^{\\text{sys}}$| at |$1\\sigma$| level.

These findings highlight the important role of lensing information in constraining the SMBH mass, particularly by limiting how massive the SMBH can be. This is especially significant in the context of direct SMBH mass determinations in intermediate- and high-redshift systems, where IFU data often suffers from suboptimal spatial resolution and SNR. When the radial image is well-resolved and has sufficient SNR, the lensing effect is sufficient to effectively constrain |$M\_\\text{BH}$|⁠, as demonstrated by Nightingale et al. (2023). On the other hand, when image quality is less favourable – reflecting the challenges of observing more distant systems – the integration of dynamical and lensing data becomes essential for reliable SMBH mass measurements.

## 5 DISCUSSION

### 5.1 SMBHs and the |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation

In Fig. 10, we put the SMBH of the main deflector in the Cosmic Horseshoe lens system in the context of the |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation from den Bosch (2016). The SMBH reported here is among the most massive SMBHs ever detected, so is the galaxy that hosts it: the measured effective velocity dispersion of |$\\sigma \_e = 366 \\pm 6$| km s|$^{-1}$|⁠. Other SMBHs exceeding |$10^{10}M\_{\\odot }$| – and thus also classified as UMBHs – with comparable |$\\sigma \_e$| have been found in Holm 15A (Mehrgan et al. 2019) and NGC 4889 (McConnell et al. 2011), both of which are nearby BCGs. The lensing galaxy of the Cosmic Horseshoe system is unique in that it lies at |$z\_l=0.44$| and lacks comparably massive companion galaxies – it is possibly the central member of a fossil group or loose cluster (Ponman et al. 1994; Dye et al. 2008).

![Relationship between $M_\text{BH}$ mass and the host effective velocity dispersion. The black solid line represents the relation from den Bosch (2016), with the dashed and dotted lines showing the $1\sigma$ and $3\sigma$ scatter, respectively. The UMBH at the centre of the Cosmic Horseshoe’s main lens is marked by a star, with a measured mass of $\log _{10}(M_\text{BH}/M_{\odot }) = 10.56^{+0.07}_{-0.08} \pm (0.12)^{\text{sys}}$. Other UMBHs that deviate significantly from the $M_\text{BH}\!-\!\sigma _e$ relation are also shown: NGC 4889 and NGC 3842 (McConnell et al. 2011), NGC 1601 (Thomas et al. 2016), Holm 15A (Mehrgan et al. 2019), and Abell 1201 (Nightingale et al. 2023). These systems are typically BCGs, and except Abell 1201 at $z = 0.169$, they are all nearby systems. The Cosmic Horseshoe, at $z_l = 0.44$, represents one of the most massive SMBHs measured and is an $\sim$$1.5\sigma$ outlier from the main $M_\text{BH}\!-\!\sigma _e$ relation. The SMBH mass compilation is from den Bosch (2016).](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig10.jpeg?Expires=1757949012&Signature=0PugaQlVJum4fQMm3njFfvbelaesMfUhFOn5-62DscqZpnf9xvB6a6NSWCL9p~0-BPoZT7YyoD5WFqs3ncNSQnocGjLPFsmloD7bakcnWPqXjqR4EIg4JpEujN29c1QMD3vVO4K~LcD1B3J9SZJsKUkQ~Z5UGNGkt-TtahF39dROyWSlLOHG5Y-JV5wfl54H0nnE-653Q~6GC6CBLdp7Nn~JKvuMP6anTM-oHyCn1xrH7BCwsiE6IkuZIQMt0tHgXNlpwQj8HvXTax3un0RHTISCOTIdIsv2Wyoor2ZcE~TZN0B-zg4V-hVYO0lW-yrzlIodabdZ6Fn8vtUIrDUNyA__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 10.

Relationship between |$M\_\\text{BH}$| mass and the host effective velocity dispersion. The black solid line represents the relation from den Bosch (2016), with the dashed and dotted lines showing the |$1\\sigma$| and |$3\\sigma$| scatter, respectively. The UMBH at the centre of the Cosmic Horseshoe’s main lens is marked by a star, with a measured mass of |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.56^{+0.07}\_{-0.08} \\pm (0.12)^{\\text{sys}}$|⁠. Other UMBHs that deviate significantly from the |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation are also shown: NGC 4889 and NGC 3842 (McConnell et al. 2011), NGC 1601 (Thomas et al. 2016), Holm 15A (Mehrgan et al. 2019), and Abell 1201 (Nightingale et al. 2023). These systems are typically BCGs, and except Abell 1201 at |$z = 0.169$|⁠, they are all nearby systems. The Cosmic Horseshoe, at |$z\_l = 0.44$|⁠, represents one of the most massive SMBHs measured and is an |$\\sim$||$1.5\\sigma$| outlier from the main |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation. The SMBH mass compilation is from den Bosch (2016).

Considering the |$M\_\\text{BH}-\\sigma \_e$| relationship from den Bosch (2016), the SMBH we measured is an |$\\sim$||$1.5\\sigma$| outlier, appearing overly massive for the host galaxy’s effective velocity dispersion. In fact, the very high-mass end of the |$M\_\\text{BH}-\\sigma \_e$|⁠, predominantly populated by BCGs, shows this distinct trend, with SMBH masses systematically exceeding the mean relation (Bogdán et al. 2018). This deviation at the massive end likely reflects distinct evolutionary pathways during the formation and assembly of these galaxies.

One possible scenario involves binary SMBH scouring, a process that can occur during the merger of massive galaxies and is more likely in the central galaxy of a group or cluster. In this process, the binary SMBHs dynamically expel stars from the central regions of the merged galaxy, effectively reducing the stellar velocity dispersion while leaving the SMBH mass largely unchanged (e.g. Thomas et al. 2014, 2016; Dullo 2019). Another possible scenario involves AGN feedback processes, where powerful outflows and jets may quench star formation and alter the galaxy’s central structure, decoupling the growth of the SMBH from the host galaxy’s stellar kinematics. Strong AGN feedback can also transfer energy to the DM and stellar components, modifying the central surface brightness profile and mimicking the presence of a core (see discussion in Mehrgan et al. 2019). A third scenario posits that such UMBHs could be remnants of extremely luminous quasars, which experienced rapid SMBH accretion episodes in the early Universe (McConnell et al. 2011; Wu et al. 2015).

These distinct mechanisms highlight the complexity of galaxy and SMBH co-evolution, particularly for the most massive galaxies, and underscore the need for tailored models (and further observations) to explain the scatter in the |$M\_\\text{BH}-\\sigma \_e$| relation at its upper end.

### 5.2 Other astrophysical implications

Beyond the determination of the SMBH mass, we can infer other physical properties of the main deflector.

As discussed, while model **M4** suggests a gradient in the mass-to-light ratio, the constant value inferred by the fiducial model remains consistent with it within the uncertainties. The fiducial model predicts a projected stellar mass fraction within the Einstein radius of |$f\_\\star \\left(\\le R\_\\text{Ein} \\right) = 0.13^{+0.01}\_{-0.01}$|⁠, which agrees with the value reported by Spiniello et al. (2011), supporting a Salpeter initial mass function. Similarly, model **M4** gives |$f\_\\star \\left(\\le R\_\\text{Ein} \\right) = 0.11^{+0.02}\_{-0.02}$|⁠, also consistent with the previous findings. Even under the more flexible assumptions of model **M10**, where the mass-to-light ratio is modulated by a Gaussian function, the projected stellar mass fraction remains in agreement with the fiducial result, at |$f\_\\star \\left(\\le R\_\\text{Ein} \\right) = 0.10^{+0.01}\_{-0.01}$|⁠.

The inner DM density slope is another noteworthy quantity, as it provides critical insights into the interaction between baryons and DM (e.g. Gnedin et al. 2004; Petit et al. 2023). Early _N_\-body DM-only simulations suggested that haloes are well described by the NFW profile (Navarro et al. 1997). However, the inclusion of baryonic components, especially feedback processes (e.g. Di Cintio et al. 2014; Jackson et al. 2024), has been shown to alter the DM distribution within galaxies. These modifications may be linked to long-standing issues such as the ‘cusp-core’ problem (see Del Popolo & Le Delliou 2021, for a review).

In our analysis, while the fiducial model assumes an NFW halo, we introduced more flexibility in the inner DM density slope through models **M2** and **M9**, both of which assume a gNFW halo. For model **M2**, we obtained an inner DM slope of |$\\gamma \_\\text{DM} = 1.06^{+0.05}\_{-0.07}$|⁠, and for model **M9**, |$\\gamma \_\\text{DM} = 1.08^{+0.06}\_{-0.07}$|⁠. Both results are consistent with an NFW-like halo.

Fig. 11 compares the surface mass density profiles along the semimajor axis for these three models. All models exhibit strong agreement, particularly in the inner regions. The most notable deviation occurs in the outermost region of the stellar density profile for model **M9**, but this remains within the |$1\\sigma$| uncertainty. The larger uncertainties in model **M9** can be explained by the greater freedom in its mass profile, which allows for simultaneous variations in the stellar mass-to-light ratio, stellar anisotropy, and DM inner slope. Additionally, the galaxy is already DM dominated before reaching the effective radius.

![Surface mass density profile for three models – fiducial (upper) and other two that uses a gNFW profile: M2 (middle) and M9 (lower). The M2 model resembles the fiducial model but with the DM inner slope as a free parameter, while M9 incorporates both a variable mass-to-light ratio and a variable anisotropy profile. The blue lines represent the stellar component, purple lines represents the DM component, and in black we show the total (DM+stellar + BH) surface density. The shaded regions indicate the $1\sigma$ credible intervals for each component. The horizontal dashed lines represent the effective radius and the Einstein radius.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036fig11.jpeg?Expires=1757949012&Signature=0ExF-RinotTbMQ~SHzoz4sJnVE5ZyYc70HiirlwWCsLlYGzx2zZIIRZTKdg55WfaSDAt-Y6f5RWLMVagPdrd71vYbTw7ZT0Bp9dgPqP1j5LGL8TcQakCi4JI~Kmp6heXDQECg2kmkAuJYWB9vS5pCfB6XhspqRD4kjKdYlCDlfK-rcyrofPZH9GlXEtMb~vrRr9rZct3ixbN7e3-dGD1g42mwyrq7nbDzGEGb~RzVKbknXX6dNSyVQjUPWB9vmhFHSTlg8rGTC9MSE3hRoFxnSznll96Hawdv~hfHIBIx0B1aCkrxO41wBXXZySrchrtaaQtcbqsFt0VNGhDU6ApGg__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure 11.

Surface mass density profile for three models – fiducial (upper) and other two that uses a gNFW profile: **M2** (middle) and **M9** (lower). The **M2** model resembles the fiducial model but with the DM inner slope as a free parameter, while **M9** incorporates both a variable mass-to-light ratio and a variable anisotropy profile. The blue lines represent the stellar component, purple lines represents the DM component, and in black we show the total (DM+stellar + BH) surface density. The shaded regions indicate the |$1\\sigma$| credible intervals for each component. The horizontal dashed lines represent the effective radius and the Einstein radius.

We also employed a gNFW halo in models **M11**–**M13**, but incorporating a mass–concentration relation to determine the scale radius. The recovered inner DM slopes for these models were |$\\gamma \_\\text{DM} = 1.29^{+0.05}\_{-0.04}$|⁠, |$\\gamma \_\\text{DM} = 1.34^{+0.07}\_{-0.07}$|⁠, and |$\\gamma \_\\text{DM} = 1.12^{+0.03}\_{-0.04}$|⁠, respectively. These slopes are steeper than an NFW-like profile. However, it is important to note that these steeper slopes do not result in better fits or higher Bayesian evidences. On the contrary, models **M11**–**M13** exhibit lower Bayesian evidence (see Table 3) compared to the other gNFW models that recovered an NFW-like slope. Additionally, when comparing these models with the fiducial model, the fiducial model remains slightly preferred.

This topic was also investigated by Schuldt et al. (2019) in their analysis of the Cosmic Horseshoe system. They reached a similar conclusion, finding that allowing more flexibility in the inner density slope of the DM halo did not lead to a significant improvement in the fit. Their results, like ours, suggest that the halo is either NFW-like or deviates only slightly from this profile, indicating that baryonic processes either do not significantly alter the inner DM halo structure in this galaxy, or cancel each other out.

## 6 CONCLUSIONS

In this work, we investigated the inner structure of the Cosmic Horseshoe lensing galaxy by applying a self-consistent model to both the radial arc and the stellar dynamics of the main deflector, using the mass of the main ring as a prior. Our fiducial model constrained the mass of the SMBH at the centre of the main-lens to be |$\\log \_{10}(M\_\\text{BH}/M\_{\\odot }) = 10.56^{+0.07}\_{-0.08} \\pm (0.12)^{\\text{sys}}$|⁠, thus an UMBH. We rigorously tested a variety of systematics, including uncertainties in the mass profile and modelling choices, but all models consistently converged to the fiducial value. A Bayesian model comparison revealed a |$5\\sigma$| detection of the SMBH relative to a model without a its contribution, reinforcing our results.

This mass places the Cosmic Horseshoe |$\\sim$||$1.5\\sigma$| above the |$M\_\\text{BH}\\!-\\!\\sigma \_e$| relation (Fig. 10), suggesting a unique evolutionary history for the Cosmic Horseshoe, which is likely part of a fossil group at |$z\_l=0.44$|⁠. The central galaxies of fossil groups, as remnants of early galaxy mergers, may follow distinct evolutionary pathways compared to local galaxies, potentially explaining the high SMBH mass.

None the less, our analysis found that the stellar mass-to-light ratio and the DM halo of the system are consistent with previous studies of ETGs. The inner DM slope, |$\\gamma \_\\text{DM}$|⁠, remained consistent with the NFW profile (⁠|$\\gamma \_\\text{DM} = 1$|⁠) across most models. Even when incorporating a mass–concentration relation, which yielded slightly steeper DM slopes (⁠|$\\gamma \_\\text{DM} > 1$|⁠), the improvements in fit quality were marginal. This support the conclusion that the DM halo of the Cosmic Horseshoe is well described by an NFW-like profile.

Such analysis present here was only possible due to the observation of a radial arc. Radial arcs, like the one studied here, are expected to become increasingly common. The Euclid mission is expected to discover hundreds of thousands of lenses over the next 5 yr (Collett 2015; Euclid Collaboration 2025), while the Extremely Large Telescope will revolutionize our ability to conduct detailed dynamical studies. The combination of lensing and dynamics will soon provide an unprecedented sample of galaxies, offering exciting insights into stellar populations, DM haloes, and SMBHs across a broader redshift range than ever before. This new era of discovery promises to deepen our understanding of galaxy evolution and the interplay between baryonic and DM components.

## SOFTWARE CITATIONS

This work uses the following software packages:

*   astroalign (Beroiz et al. 2020)
    
*   astropy (Astropy Collaboration 2018)
    
*   cmasher (van der Velden 2020)
    
*   dynesty (Speagle 2020)
    
*   herculens (Galan et al. 2022; Enzi et al. 2025)
    
*   jam (Cappellari 2008, 2020)
    
*   jupyter (Kluyver et al. 2016)
    
*   matplotlib (Hunter 2007)
    
*   mgefit (Cappellari 2002)
    
*   mpdaf (Piqueras et al. 2017)
    
*   numba (Lam, Pitrou & Seibert 2015)
    
*   numpy (Harris et al. 2020)
    
*   ppxf (Cappellari & Emsellem 2004)
    
*   psfr (Birrer et al. 2022)
    
*   pyautolens (Nightingale et al. 2018)
    
*   scipy (Virtanen et al. 2020)
    
*   shapely (Gillies et al. 2024)
    
*   vorbin (Cappellari & Copin 2003)
    

## ACKNOWLEDGEMENTS

We thank the anonymous referee for the detailed feedback. This work has been supported by Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq). This research was supported by the Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES) through grant 88887.936450/2024-00. This work has received funding from the European Research Council (ERC) under the European Union’s Horizon 2020 research and innovation programme (LensEra: grant agreement No. 945536). TEC is funded by the Royal Society through a University Research Fellowship. CF ackwoledges funding from CNPq and the Rio Grande do Sul Research Foundation (FAPERGS) through grants CNPq-315421/2023-1 and FAPERGS-21/2551-0002025-3. ACS acknowledges funding from CNPq and FAPERGS through grants CNPq-314301/2021-6 and FAPERGS/CAPES 19/2551-0000696-9. The authors acknowledge the National Laboratory for Scientific Computing (LNCC/MCTI, Brazil) for providing HPC resources of the SDumont supercomputer, which have contributed to the research results reported within this paper. URL: [http://sdumont.lncc.br](http://sdumont.lncc.br/). This work made use of the CHE cluster, managed and funded by COSMO/CBPF/MCTI, with financial support from FINEP and FAPERJ, and operating at the Javier Magnin Computing Center/CBPF. Based on observations made with the NASA/ESA _Hubble Space Telescope_, and obtained from the Hubble Legacy Archive, which is a collaboration between the Space Telescope Science Institute (STScI/NASA), the Space Telescope European Coordinating Facility (ST-ECF/ESA), and the Canadian Astronomy Data Centre (CADC/NRC/CSA). Based on observations collected at the European Southern Observatory under ESO programme 094.B-0771 obtained from the ESO Science Archive Facility with DOI [https://doi.eso.org/10.18727/archive/42](https://doi.eso.org/10.18727/archive/42).

## DATA AVAILABILITY

The _HST_ imaging data are publicly available at the Hubble Legacy Archive ([https://hla.stsci.edu/](https://hla.stsci.edu/)) under the programs 11602 (PI: Sahar Allam) and 12266 (PI: Anna Quider). The MUSE data are available at ESO Science Archive Facility ([http://archive.eso.org/scienceportal/](http://archive.eso.org/scienceportal/)) under the program-ID 094.B-0771 (PI: Bethan James). Data relative to Fig. 10 are available at [https://github.com/remco-space/Black-Hole-Mass-compilation](https://github.com/remco-space/Black-Hole-Mass-compilation). Additional data generated in this research will be available upon request to Carlos Melo: [\[email protected\]](https://academic.oup.com/cdn-cgi/l/email-protection#503331223c3f237e3d353c3f1025362237237e3222)/[\[email protected\]](https://academic.oup.com/cdn-cgi/l/email-protection#d5b6a7b8b6fbb8b0b9ba95b2b8b4bcb9fbb6bab8).

## Footnotes

1

2

PropID: 11602, PI: Sahar Allam

3

PropID: 12266, PI: Anna Quider

4

5

ProgID: 094.B-0771, PI: Bethan James

6

7

The effective radius was determined using the galaxy’s MGE surface brightness model. See Section [3.3](#sec3-3) for more details.

8

This assumes that the lens light was subtracted already.

10

Here assumed to be the observed seeing.

11

This parametrization is performed iteratively, starting with 20 Gaussian components and adding more if the absolute deviation from the target analytical profile exceeds 10 per cent in any radial bin. The process continues until all deviations fall below the threshold or a maximum of 45 components is reached. Based on our tests, 20 Gaussians are typically sufficient to accurately represent NFW or gNFW profiles.

12

This is obtained by taking |$\\gamma \_\\text{DM} = 1$| in equation ([15](#equ15)).

13

This assumes equal prior model probabilities.

## REFERENCES

Arenou

 

F.

 et al. ,

2018

,

A&A

,

616

,

A17

 

Astropy Collaboration

,

2018

,

AJ

,

156

,

123

 

Barnabè

 

M.

 et al. ,

2012

,

MNRAS

,

423

,

1073

 

Beifiori

 

A.

,

Sarzi

 

M.

,

Corsini

 

E. M.

,

Dalla Bontà

 

E.

,

Pizzella

 

A.

,

Coccato

 

L.

,

Bertola

 

F.

,

2009

,

ApJ

,

692

,

856

 

Belokurov

 

V.

 et al. ,

2007

,

ApJ

,

671

,

L9

 

Bentz

 

M. C.

,

Katz

 

S.

,

2015

,

PASP

,

127

,

67

 

Beroiz

 

M.

,

Cabral

 

J.

,

Sanchez

 

B.

,

2020

,

Astron. Comput.

,

32

,

100384

 

Binney

 

J.

,

Tremaine

 

S.

,

2008

,

Galactic Dynamics

, 2nd edn,

Princeton University Press

,

Princeton, NJ

, p

274

Birrer

 

S.

 et al. ,

2019

,

MNRAS

,

484

,

4726

 

Birrer

 

S.

,

Bhamre

 

V.

,

Nierenberg

 

A.

,

Yang

 

L.

,

Van de Vyvere

 

L.

,

2022

,

Astrophysics Source Code Library, record ascl:2210.005

.

Blandford

 

R. D.

,

McKee

 

C. F.

,

1982

,

ApJ

,

255

,

419

 

Bogdán

 

Á.

,

Lovisari

 

L.

,

Volonteri

 

M.

,

Dubois

 

Y.

,

2018

,

ApJ

,

852

,

131

 

Burkert

 

A.

,

Tremaine

 

S.

,

2010

,

ApJ

,

720

,

516

 

Cappellari

 

M.

,

2002

,

MNRAS

,

333

,

400

 

Cappellari

 

M.

,

2008

,

MNRAS

,

390

,

71

 

Cappellari

 

M.

,

2020

,

MNRAS

,

494

,

4819

 

Cappellari

 

M.

,

Copin

 

Y.

,

2003

,

MNRAS

,

342

,

345

 

Cappellari

 

M.

,

Emsellem

 

E.

,

2004

,

PASP

,

116

,

138

 

Cappellari

 

M.

 et al. ,

2013

,

MNRAS

,

432

,

1709

 

Collett

 

T. E.

,

2015

,

ApJ

,

811

,

20

 

Collett

 

T. E.

 et al. ,

2018

,

Science

,

360

,

1342

 

Conroy

 

C.

,

van Dokkum

 

P. G.

,

2012

,

ApJ

,

760

,

71

 

Costa-Souza

 

J. H.

,

Riffel

 

R. A.

,

Souza-Oliveira

 

G. L.

,

Zakamska

 

N. L.

,

Bianchin

 

M.

,

Storchi-Bergmann

 

T.

,

Riffel

 

R.

,

2024

,

ApJ

,

974

,

127

 

Del Popolo

 

A.

,

Le Delliou

 

M.

,

2021

,

Galaxies

,

9

,

123

 

Di Cintio

 

A.

,

Brook

 

C. B.

,

Macciò

 

A. V.

,

Stinson

 

G. S.

,

Knebe

 

A.

,

Dutton

 

A. A.

,

Wadsley

 

J.

,

2014

,

MNRAS

,

437

,

415

 

Dubois

 

Y.

,

Gavazzi

 

R.

,

Peirani

 

S.

,

Silk

 

J.

,

2013

,

MNRAS

,

433

,

3297

 

Dullo

 

B. T.

,

2019

,

ApJ

,

886

,

80

 

Dye

 

S.

,

Evans

 

N. W.

,

Belokurov

 

V.

,

Warren

 

S. J.

,

Hewett

 

P.

,

2008

,

MNRAS

,

388

,

384

 

Emsellem

 

E.

,

Monnet

 

G.

,

Bacon

 

R.

,

1994

,

A&A

,

285

,

723

Emsellem

 

E.

 et al. ,

2007

,

MNRAS

,

379

,

401

 

Enzi

 

W. J. R.

,

Krawczyk

 

C. M.

,

Ballard

 

D. J.

,

Collett

 

T. E.

,

2025

,

MNRAS

,

540

,

247

 

Etherington

 

A.

 et al. ,

2022

,

MNRAS

,

517

,

3275

 

Euclid Collaboration

,

2025

,

(

)

Galan

 

A.

,

Vernardos

 

G.

,

Peel

 

A.

,

Courbin

 

F.

,

Starck

 

J. L.

,

2022

,

A&A

,

668

,

A155

 

Gebhardt

 

K.

 et al. ,

2000

,

ApJ

,

543

,

L5

 

Gerhard

 

O. E.

,

1993

,

MNRAS

,

265

,

213

 

Gerhard

 

O.

,

Kronawitter

 

A.

,

Saglia

 

R. P.

,

Bender

 

R.

,

2001

,

AJ

,

121

,

1936

 

Gillies

 

S.

,

van der Wel

 

C.

,

Van den Bossche

 

J.

,

Taves

 

M. W.

,

Arnott

 

J.

,

Ward

 

B. C.

, et al. ,

2024

, Shapely,

 

Gnedin

 

O. Y.

,

Kravtsov

 

A. V.

,

Klypin

 

A. A.

,

Nagai

 

D.

,

2004

,

ApJ

,

616

,

16

 

Gorenstein

 

M. V.

,

Falco

 

E. E.

,

Shapiro

 

I. I.

,

1988

,

ApJ

,

327

,

693

 

Gu

 

M.

,

Greene

 

J. E.

,

Newman

 

A. B.

,

Kreisch

 

C.

,

Quenneville

 

M. E.

,

Ma

 

C.-P.

,

Blakeslee

 

J. P.

,

2022

,

ApJ

,

932

,

103

 

Gültekin

 

K.

 et al. ,

2009

,

ApJ

,

698

,

198

 

Harris

 

G. L. H.

,

Poole

 

G. B.

,

Harris

 

W. E.

,

2014

,

MNRAS

,

438

,

2117

 

Harris

 

C. R.

 et al. ,

2020

,

Nature

,

585

,

357

 

Hlavacek-Larrondo

 

J.

,

Fabian

 

A. C.

,

Edge

 

A. C.

,

Hogan

 

M. T.

,

2012

,

MNRAS

,

424

,

224

 

Hopkins

 

P. F.

,

Somerville

 

R. S.

,

Hernquist

 

L.

,

Cox

 

T. J.

,

Robertson

 

B.

,

Li

 

Y.

,

2006

,

ApJ

,

652

,

864

 

Hunter

 

J. D.

,

2007

,

Comput. Sci. Eng.

,

9

,

90

 

Ishibashi

 

W.

,

Fabian

 

A. C.

,

2012

,

MNRAS

,

427

,

2998

 

Jackson

 

R. A.

 et al. ,

2024

,

MNRAS

,

528

,

1655

 

James

 

B. L.

,

Auger

 

M.

,

Pettini

 

M.

,

Stark

 

D. P.

,

Belokurov

 

V.

,

Carniani

 

S.

,

2018

,

MNRAS

,

476

,

1726

 

Jeffreys

 

H.

,

1961

,

Theory of Probability

, 3rd edn.

Oxford Univ. Press

,

Oxford

Kluyver

 

T.

 et al. ,

2016

, in

Loizides

 

F.

,

Schmidt

 

B.

eds,

Positioning and Power in Academic Publishing: Players, Agents and Agendas

.

IOS Press

,

Netherlands

, p.

87

Knabel

 

S.

,

Mozumdar

 

P.

,

Shajib

 

A. J.

,

Treu

 

T.

,

Cappellari

 

M.

,

Spiniello

 

C.

,

Birrer

 

S.

,

2025

,

(

)

Kormendy

 

J.

,

Ho

 

L. C.

,

2013

,

ARA&A

,

51

,

511

 

Kravtsov

 

A. V.

,

2013

,

ApJ

,

764

,

L31

 

Lam

 

S. K.

,

Pitrou

 

A.

,

Seibert

 

S.

,

2015

,

Proceedings of the Second Workshop on the LLVM Compiler Infrastructure in HPC. LLVM’15

.

Association for Computing Machinery

,

New York, NY, USA

 

Laor

 

A.

,

2001

,

ApJ

,

553

,

677

 

Liddle

 

A. R.

,

Mukherjee

 

P.

,

Parkinson

 

D.

,

Wang

 

Y.

,

2006

,

Phys. Rev. D

,

74

,

123506

 

Ludlow

 

A. D.

,

Bose

 

S.

,

Angulo

 

R. E.

,

Wang

 

L.

,

Hellwing

 

W. A.

,

Navarro

 

J. F.

,

Cole

 

S.

,

Frenk

 

C. S.

,

2016

,

MNRAS

,

460

,

1214

 

Magorrian

 

J.

 et al. ,

1998

,

AJ

,

115

,

2285

 

Marasco

 

A.

,

Cresci

 

G.

,

Posti

 

L.

,

Fraternali

 

F.

,

Mannucci

 

F.

,

Marconi

 

A.

,

Belfiore

 

F.

,

Fall

 

S. M.

,

2021

,

MNRAS

,

507

,

4274

 

Marconi

 

A.

,

Hunt

 

L. K.

,

2003

,

ApJ

,

589

,

L21

 

Maresca

 

J.

,

Dye

 

S.

,

Li

 

N.

,

2021

,

MNRAS

,

503

,

2229

 

McConnell

 

N. J.

,

Ma

 

C.-P.

,

Gebhardt

 

K.

,

Wright

 

S. A.

,

Murphy

 

J. D.

,

Lauer

 

T. R.

,

Graham

 

J. R.

,

Richstone

 

D. O.

,

2011

,

Nature

,

480

,

215

 

McConnell

 

N. J.

,

Ma

 

C.-P.

,

Murphy

 

J. D.

,

Gebhardt

 

K.

,

Lauer

 

T. R.

,

Graham

 

J. R.

,

Wright

 

S. A.

,

Richstone

 

D. O.

,

2012

,

ApJ

,

756

,

179

 

McLure

 

R. J.

,

Dunlop

 

J. S.

,

2002

,

MNRAS

,

331

,

795

 

Mehrgan

 

K.

,

Thomas

 

J.

,

Saglia

 

R.

,

Mazzalay

 

X.

,

Erwin

 

P.

,

Bender

 

R.

,

Kluge

 

M.

,

Fabricius

 

M.

,

2019

,

ApJ

,

887

,

195

 

Melo-Carneiro

 

C. R.

,

Furlanetto

 

C.

,

Chies-Santos

 

A. L.

,

2023

,

MNRAS

,

520

,

1613

 

Meneghetti

 

M.

,

Bartelmann

 

M.

,

Dahle

 

H.

,

Limousin

 

M.

,

2013

,

Space Sci. Rev.

,

177

,

31

 

Navarro

 

J. F.

,

Frenk

 

C. S.

,

White

 

S. D. M.

,

1997

,

ApJ

,

490

,

493

 

Newman

 

A. B.

,

Ellis

 

R. S.

,

Treu

 

T.

,

2015

,

ApJ

,

814

,

26

 

Nightingale

 

J. W.

,

Dye

 

S.

,

Massey

 

R. J.

,

2018

,

MNRAS

,

478

,

4738

 

Nightingale

 

J.

 et al. ,

2021

,

J. Open Source Softw.

,

6

,

2825

 

Nightingale

 

J. W.

 et al. ,

2023

,

MNRAS

,

521

,

3298

 

Petit

 

Q.

,

Ducourant

 

C.

,

Slezak

 

E.

,

Sluse

 

D.

,

Delchambre

 

L.

,

2023

,

A&A

,

669

,

A132

 

Piqueras

 

L.

,

Conseil

 

S.

,

Shepherd

 

M.

,

Bacon

 

R.

,

Leclercq

 

F.

,

Richard

 

J.

,

2017

,

(

)

Planck Collaboration XIII

,

2016

,

A&A

,

594

,

A13

 

Ponman

 

T. J.

,

Allan

 

D. J.

,

Jones

 

L. R.

,

Merrifield

 

M.

,

McHardy

 

I. M.

,

Lehto

 

H. J.

,

Luppino

 

G. A.

,

1994

,

Nature

,

369

,

462

 

Powell

 

M. C.

 et al. ,

2022

,

ApJ

,

938

,

77

 

Ricciardelli

 

E.

,

Vazdekis

 

A.

,

Cenarro

 

A. J.

,

Falcón-Barroso

 

J.

,

2012

,

MNRAS

,

424

,

172

 

Riffel

 

R.

 et al. ,

2024

,

MNRAS

,

531

,

554

 

Schneider

 

P.

,

Ehlers

 

J.

,

Falco

 

E. E.

,

1992

,

Gravitational Lenses

.

Springer Berlin

,

Heidelberg

 

Schuldt

 

S.

,

Chirivì

 

G.

,

Suyu

 

S. H.

,

Yıldırım

 

A.

,

Sonnenfeld

 

A.

,

Halkola

 

A.

,

Lewis

 

G. F.

,

2019

,

A&A

,

631

,

A40

 

Shen

 

Y.

,

2013

,

Bull. Astron. Soc. India

,

41

,

61

 

Sibson

 

R.

,

1981

, in

Barnett

 

V.

ed.,

Interpreting Multivariate Data

.

John Wiley and Sons

,

New York

, p.

21

Silk

 

J.

,

2013

,

ApJ

,

772

,

112

 

Skilling

 

J.

,

2006

,

Bayesian Anal.

,

1

,

833

 

Smith

 

R. J.

,

Lucey

 

J. R.

,

Edge

 

A. C.

,

2017a

,

MNRAS

,

467

,

836

 

Smith

 

R. J.

,

Lucey

 

J. R.

,

Edge

 

A. C.

,

2017b

,

MNRAS

,

471

,

383

 

Sonnenfeld

 

A.

,

Treu

 

T.

,

Marshall

 

P. J.

,

Suyu

 

S. H.

,

Gavazzi

 

R.

,

Auger

 

M. W.

,

Nipoti

 

C.

,

2015

,

ApJ

,

800

,

94

 

Speagle

 

J. S.

,

2020

,

MNRAS

,

493

,

3132

 

Spiniello

 

C.

,

Koopmans

 

L. V. E.

,

Trager

 

S. C.

,

Czoske

 

O.

,

Treu

 

T.

,

2011

,

MNRAS

,

417

,

3000

 

Suyu

 

S. H.

,

Marshall

 

P. J.

,

Hobson

 

M. P.

,

Blandford

 

R. D.

,

2006

,

MNRAS

,

371

,

983

 

Tessore

 

N.

,

Metcalf

 

R. B.

,

2015

,

A&A

,

580

,

A79

 

Thomas

 

J.

,

Saglia

 

R. P.

,

Bender

 

R.

,

Erwin

 

P.

,

Fabricius

 

M.

,

2014

,

ApJ

,

782

,

39

 

Thomas

 

J.

,

Ma

 

C.-P.

,

McConnell

 

N. J.

,

Greene

 

J. E.

,

Blakeslee

 

J. P.

,

Janish

 

R.

,

2016

,

Nature

,

532

,

340

 

Trick

 

W. H.

,

van de Ven

 

G.

,

Dutton

 

A. A.

,

2016

,

MNRAS

,

463

,

3151

 

Vazdekis

 

A.

,

Ricciardelli

 

E.

,

Cenarro

 

A. J.

,

Rivero-González

 

J. G.

,

Díaz-García

 

L. A.

,

Falcón-Barroso

 

J.

,

2012

,

MNRAS

,

424

,

157

 

Verro

 

K.

 et al. ,

2022

,

A&A

,

661

,

A50

 

Virtanen

 

P.

 et al. ,

2020

,

Nat. Methods

,

17

,

261

 

Wang

 

H.

 et al. ,

2022

,

A&A

,

668

,

A162

 

Warren

 

S. J.

,

Dye

 

S.

,

2003

,

ApJ

,

590

,

673

 

Weilbacher

 

P. M.

,

Streicher

 

O.

,

Palsa

 

R.

,

2016

,

Astrophysics Source Code Library, record ascl:1610.004

.

Willmer

 

C. N. A.

,

2018

,

ApJS

,

236

,

47

 

Wu

 

X.

,

Gerhard

 

O.

,

Naab

 

T.

,

Oser

 

L.

,

Martinez-Valpuesta

 

I.

,

Hilz

 

M.

,

Churazov

 

E.

,

Lyskova

 

N.

,

2014

,

MNRAS

,

438

,

2701

 

Wu

 

X.-B.

 et al. ,

2015

,

Nature

,

518

,

512

 

Wyithe

 

J. S. B.

,

Turner

 

E. L.

,

Spergel

 

D. N.

,

2001

,

ApJ

,

555

,

504

 

van den Bosch

 

R. C. E.

,

2016

,

ApJ

,

831

,

134

 

van der Velden

 

E.

,

2020

,

J. Open Source Softw.

,

5

,

2004

 

### APPENDIX A: CONJUGATED REGIONS

Instead of selecting pairs of conjugated points in the lens plane that are expected to map to the same location in the source plane, we selected pairs of conjugated regions in the lens plane that are expected to overlap when mapped back to the source plane. This approach is particularly suitable when identifying conjugated points is unclear, such as in the case of faint counter-images. The method is implemented as follows:

First, we select two regions in the image plane that are expected to overlap in the source plane after being delensed. For a given lens macro model, we ray-trace the pixels from the image plane to the source plane. Once mapped to the source plane, we generate convex hull polygons for the individual regions, ensuring all image pixels from the corresponding regions are contained within the delensed regions in the source plane.

We then assess whether the two source plane regions intersect. If they do, the lens macro model is accepted. Otherwise, the log-likelihood is penalized by a factor of |$10^{8}d\_{p}$|⁠, where |$d\_{p}$| represents the minimum distance between the two convex hull polygons.

In Fig. A1, we illustrate the method. The left panel shows a pair of conjugated regions in the image plane, which are presumably part of the lensed source. The central panel displays the corresponding regions in the source plane after being delensed. In this scenario, since the regions do not overlap in the source plane, the lens macro model will be penalized. The right panel shows the case where the regions overlap in the source plane after being delensed, and the lens macro model is accepted.

![Schematic representation of the conjugated region method. The left panel shows the pair of conjugated regions in the image plane. The central panel illustrates a scenario where the lens macro model is rejected because the delensed regions do not overlap in the source plane. In this case, the likelihood is penalized by a factor proportional to the minimum distance between the polygons, represented by the dashed line. The right panel depicts the case where the regions overlap in the source plane after inversion, leading to the acceptance of the lens macro model.](https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/mnras/541/4/10.1093_mnras_staf1036/4/m_staf1036figa1.jpeg?Expires=1757949012&Signature=dbZNZETa326Dth2TEF4I5nhnaGTotR67hnHqH-KYb1RhwMIc8asRf55n0Q6JagJR-eFzJ8LCpP5I6R5Oklzr9PImlcHVMUq4UGvbwPrCdaVNfqPl34kiUSR-WoPCIW9wmmOJobsVjLdDXv84mx78CgyUTpUtY6qUrI7Pv1pEtrn035-GilZcOafYVkOJVbeSe~rd9uVYfVcSS~iOm7D7K~IZ3siaLl0LEgdGVTvZNDE4qGpY9nfiOBk5BEd27xENY1ummr5fhC826-2vXOSrvQUO3oZD73xIa~bbVlNYfe0LDtfsO3FeVi6SxGYZ7syTOAfVPiDLmHo6vgJPy8ZwlQ__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA)

Figure A1.

Schematic representation of the conjugated region method. The left panel shows the pair of conjugated regions in the image plane. The central panel illustrates a scenario where the lens macro model is rejected because the delensed regions do not overlap in the source plane. In this case, the likelihood is penalized by a factor proportional to the minimum distance between the polygons, represented by the dashed line. The right panel depicts the case where the regions overlap in the source plane after inversion, leading to the acceptance of the lens macro model.

We used the ConvexHull routine from scipy.spatial to create the convex hull polygons in the source plane, and the shapely package to calculate the intersection and distance between the source plane polygons.

### APPENDIX B: ELLIPTICAL POWER-LAW MASS MODEL

The EPL density profile (Tessore & Metcalf 2015) is widely employed in SGL studies to characterize the total mass distribution of the lens. The convergence for this profile is expressed as

$$\\begin{eqnarray} \\kappa (\\xi) = \\frac{\\left(3-\\gamma ^{\\text{lens}}\\right)}{1 + q^{\\text{lens}}} \\left(\\frac{\\theta ^{\\text{lens}}\_\\text{Ein}}{\\xi }\\right)^{\\gamma ^{\\text{lens}} -1}, \\end{eqnarray}$$

(B1)

where |$q^{\\text{lens}}$| is the axis ratio (minor-to-major axis), and |$\\xi$| is the elliptical coordinate given by |$\\xi = \\sqrt{x^2 + (y/q^{\\text{lens}})^2}$|⁠. The parameter |$\\theta ^{\\text{lens}}\_\\text{Ein}$| is Einstein radius in units of arcsec, and |$\\gamma ^{\\text{lens}}$| is the mass density slope, which reduces to a singular isothermal ellipsoid for |$\\gamma ^{\\text{lens}} = 2$|⁠.

Additionally, the mass position angle, |$\\phi ^{\\text{lens}}$|⁠, measured counter-clockwise from the positive _x_\-axis, can be incorporated by introducing the elliptical components:

$$\\begin{eqnarray} \\epsilon \_1 = \\frac{1-q^{\\text{lens}}}{1 + q^{\\text{lens}}}\\sin {2\\phi ^{\\text{lens}}}, \\quad \\quad \\epsilon \_2 = \\frac{1-q^{\\text{lens}}}{1 + q^{\\text{lens}}}\\cos {2\\phi ^{\\text{lens}}}, \\end{eqnarray}$$

(B2)

which prevents sampling issues related to the periodicity of |$\\phi ^{\\text{lens}}$| and the discontinuity at |$q^{\\text{lens}} = 0$| (e.g. Etherington et al. 2022; Galan et al. 2022).

It is essential to distinguish between the Einstein radius |$\\theta ^{\\text{lens}}\_\\text{Ein}$| used in this equation and the _effective_ Einstein radius, as defined in Meneghetti et al. (2013). The _effective_ Einstein radius corresponds to the radius of a circle with the same area as the region enclosed by the tangential critical curve. The Einstein radius reported in Section [3.1](#sec3-1) refers to the effective definition.

We modelled the lensed source s2 in the Cosmic Horseshoe using the EPL mass profile to describe the total mass distribution of the main deflector. We also added an external shear contribution. For the source reconstruction, we utilized a KMeans mesh grid with VoronoiNN pixelization and a AdaptiveBrightnessSplit regularization, which adapts the smoothing based on the source’s surface brightness. Additionally, during the lens modelling, we only included pixels within the mask encompassing the arc, as illustrated in the middle panel of Fig. 3.

The highest-likelihood image model and source reconstruction are presented in Fig. 3\. The median values and associated |$1\\sigma$| uncertainties of the parameter’s one-dimensional marginalized posterior of the EPL model are summarized in Table B1.

Table B1.

Inferred median and |$1\\sigma$| credible intervals for the parameters of the EPL mass model.

Parameter

Posterior (median with |$1\\sigma$| uncertainties)

|$\\epsilon \_1$|

|$0.097^{+0.001}\_{-0.001}$|

|$\\epsilon \_2$|

|$0.013^{+0.01}\_{-0.001}$|

|$\\theta ^{\\text{lens}}\_\\text{Ein} \[\\mathrm{ arcsec}\]$|

|$5.002^{+0.009}\_{-0.005}$|

|$\\gamma ^{\\text{lens}}$|

|$1.82^{+0.02}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$0.026^{+0.001}\_{-0.001}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$0.008^{+0.001}\_{-0.001}$|

Parameter

Posterior (median with |$1\\sigma$| uncertainties)

|$\\epsilon \_1$|

|$0.097^{+0.001}\_{-0.001}$|

|$\\epsilon \_2$|

|$0.013^{+0.01}\_{-0.001}$|

|$\\theta ^{\\text{lens}}\_\\text{Ein} \[\\mathrm{ arcsec}\]$|

|$5.002^{+0.009}\_{-0.005}$|

|$\\gamma ^{\\text{lens}}$|

|$1.82^{+0.02}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$0.026^{+0.001}\_{-0.001}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$0.008^{+0.001}\_{-0.001}$|

Table B1.

Inferred median and |$1\\sigma$| credible intervals for the parameters of the EPL mass model.

Parameter

Posterior (median with |$1\\sigma$| uncertainties)

|$\\epsilon \_1$|

|$0.097^{+0.001}\_{-0.001}$|

|$\\epsilon \_2$|

|$0.013^{+0.01}\_{-0.001}$|

|$\\theta ^{\\text{lens}}\_\\text{Ein} \[\\mathrm{ arcsec}\]$|

|$5.002^{+0.009}\_{-0.005}$|

|$\\gamma ^{\\text{lens}}$|

|$1.82^{+0.02}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$0.026^{+0.001}\_{-0.001}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$0.008^{+0.001}\_{-0.001}$|

Parameter

Posterior (median with |$1\\sigma$| uncertainties)

|$\\epsilon \_1$|

|$0.097^{+0.001}\_{-0.001}$|

|$\\epsilon \_2$|

|$0.013^{+0.01}\_{-0.001}$|

|$\\theta ^{\\text{lens}}\_\\text{Ein} \[\\mathrm{ arcsec}\]$|

|$5.002^{+0.009}\_{-0.005}$|

|$\\gamma ^{\\text{lens}}$|

|$1.82^{+0.02}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$0.026^{+0.001}\_{-0.001}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$0.008^{+0.001}\_{-0.001}$|

### APPENDIX C: PRIORS

In Table C1 we describe the parameters and the priors applied in the models presented in this work, and discussed in Section [4](#sec4). We adopted the following notation: |$U\[a,b\]$| for a uniform prior between the lower value _a_ and the upper value _b_; |$N\[a,b\]$| for a normal Gaussian prior with mean _a_ and dispersion _b_; and |$\\log \_{10} U\[a,b\]$| for a log-uniform prior between the lower value _a_ and the upper value _b_.

Table C1.

Parameters and priors used in this work. From left to right, the columns are parameter, prior, parameter description, and physical unit. |$^\\dagger$| Minimum value is determined by the minimum axial ratio allowed by equation ([14](#equ14)). |$^\\ddagger$| Relative to the mass-to-light ratio profile described by equation ([17](#equ17)).

Parameter

Prior

Description

Physical unit

_i_

|$U\[49.55, 90\]^\\dagger$|

inclination along the line of sight

degree

|$\\beta \_\\text{star}$|

|$U\[-0.5, 0.5\]$|

stellar anisotropy

\-

|$\\Upsilon \_\\star$|

|$U\[0.1, 10\]$|

stellar mass-to-light ratio

|$M\_{\\odot }/L\_{\\odot }$|

|$\\log \_{10}\\rho \_s$|

|$U\[-6, 0\]$|

DM characteristic density

|$\\frac{\\rho \_s}{M\_\\odot \\text{pc}^{-3}}$|

|$M^\\text{DM}\_{200}$|

|$\\log \_{10} U\[10^{10},10^{15}\]$|

mass at 200 times the critical density of the Universe

|$10^{13}M\_{\\odot }$|

|$r\_s$|

|$U\[10, 30\]$|

DM scale radius

arcsec

|$q\_\\text{DM}$|

|$U\[0.65, 1\]$|

DM axial ratio

\-

|$\\gamma \_\\text{DM}$|

|$U\[0, 2\]$|

DM density slope

\-

|$\\log \_{10}M\_\\text{BH}$|

|$\\log \_{10} U\[8,12\]$|

mass of the SMBH

|$\\frac{M\_\\text{BH}}{M\_{\\odot }}$|

|$\\Upsilon \_0$|

|$U\[0.1, 10\]$|

central stellar mass-to-light ratio|$^\\ddagger$|

|$M\_{\\odot }/L\_{\\odot }$|

|$\\upsilon \_0$|

|$U\[0, 10\]$|

ratio between the central and outermost stellar mass-to-light ratio|$^\\ddagger$|

\-

|$\\delta$|

|$U\[0.1, 1\]$|

smoothness of the stellar mass-to-light ratio|$^\\ddagger$|

arcsec|$^{-1}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$U\[-0.2, 0.2\]$|

elliptical shear component

\-

|$\\epsilon ^{\\text{sh}}\_2$|

|$U\[-0.2, 0.2\]$|

elliptical shear component

\-

|$M\_\\text{Ein}$|

|$N\[5.46, 0.27\]$|

Einstein mass within the tangential ring

|$10^{12}M\_{\\odot }$|

Parameter

Prior

Description

Physical unit

_i_

|$U\[49.55, 90\]^\\dagger$|

inclination along the line of sight

degree

|$\\beta \_\\text{star}$|

|$U\[-0.5, 0.5\]$|

stellar anisotropy

\-

|$\\Upsilon \_\\star$|

|$U\[0.1, 10\]$|

stellar mass-to-light ratio

|$M\_{\\odot }/L\_{\\odot }$|

|$\\log \_{10}\\rho \_s$|

|$U\[-6, 0\]$|

DM characteristic density

|$\\frac{\\rho \_s}{M\_\\odot \\text{pc}^{-3}}$|

|$M^\\text{DM}\_{200}$|

|$\\log \_{10} U\[10^{10},10^{15}\]$|

mass at 200 times the critical density of the Universe

|$10^{13}M\_{\\odot }$|

|$r\_s$|

|$U\[10, 30\]$|

DM scale radius

arcsec

|$q\_\\text{DM}$|

|$U\[0.65, 1\]$|

DM axial ratio

\-

|$\\gamma \_\\text{DM}$|

|$U\[0, 2\]$|

DM density slope

\-

|$\\log \_{10}M\_\\text{BH}$|

|$\\log \_{10} U\[8,12\]$|

mass of the SMBH

|$\\frac{M\_\\text{BH}}{M\_{\\odot }}$|

|$\\Upsilon \_0$|

|$U\[0.1, 10\]$|

central stellar mass-to-light ratio|$^\\ddagger$|

|$M\_{\\odot }/L\_{\\odot }$|

|$\\upsilon \_0$|

|$U\[0, 10\]$|

ratio between the central and outermost stellar mass-to-light ratio|$^\\ddagger$|

\-

|$\\delta$|

|$U\[0.1, 1\]$|

smoothness of the stellar mass-to-light ratio|$^\\ddagger$|

arcsec|$^{-1}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$U\[-0.2, 0.2\]$|

elliptical shear component

\-

|$\\epsilon ^{\\text{sh}}\_2$|

|$U\[-0.2, 0.2\]$|

elliptical shear component

\-

|$M\_\\text{Ein}$|

|$N\[5.46, 0.27\]$|

Einstein mass within the tangential ring

|$10^{12}M\_{\\odot }$|

Table C1.

Parameters and priors used in this work. From left to right, the columns are parameter, prior, parameter description, and physical unit. |$^\\dagger$| Minimum value is determined by the minimum axial ratio allowed by equation ([14](#equ14)). |$^\\ddagger$| Relative to the mass-to-light ratio profile described by equation ([17](#equ17)).

Parameter

Prior

Description

Physical unit

_i_

|$U\[49.55, 90\]^\\dagger$|

inclination along the line of sight

degree

|$\\beta \_\\text{star}$|

|$U\[-0.5, 0.5\]$|

stellar anisotropy

\-

|$\\Upsilon \_\\star$|

|$U\[0.1, 10\]$|

stellar mass-to-light ratio

|$M\_{\\odot }/L\_{\\odot }$|

|$\\log \_{10}\\rho \_s$|

|$U\[-6, 0\]$|

DM characteristic density

|$\\frac{\\rho \_s}{M\_\\odot \\text{pc}^{-3}}$|

|$M^\\text{DM}\_{200}$|

|$\\log \_{10} U\[10^{10},10^{15}\]$|

mass at 200 times the critical density of the Universe

|$10^{13}M\_{\\odot }$|

|$r\_s$|

|$U\[10, 30\]$|

DM scale radius

arcsec

|$q\_\\text{DM}$|

|$U\[0.65, 1\]$|

DM axial ratio

\-

|$\\gamma \_\\text{DM}$|

|$U\[0, 2\]$|

DM density slope

\-

|$\\log \_{10}M\_\\text{BH}$|

|$\\log \_{10} U\[8,12\]$|

mass of the SMBH

|$\\frac{M\_\\text{BH}}{M\_{\\odot }}$|

|$\\Upsilon \_0$|

|$U\[0.1, 10\]$|

central stellar mass-to-light ratio|$^\\ddagger$|

|$M\_{\\odot }/L\_{\\odot }$|

|$\\upsilon \_0$|

|$U\[0, 10\]$|

ratio between the central and outermost stellar mass-to-light ratio|$^\\ddagger$|

\-

|$\\delta$|

|$U\[0.1, 1\]$|

smoothness of the stellar mass-to-light ratio|$^\\ddagger$|

arcsec|$^{-1}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$U\[-0.2, 0.2\]$|

elliptical shear component

\-

|$\\epsilon ^{\\text{sh}}\_2$|

|$U\[-0.2, 0.2\]$|

elliptical shear component

\-

|$M\_\\text{Ein}$|

|$N\[5.46, 0.27\]$|

Einstein mass within the tangential ring

|$10^{12}M\_{\\odot }$|

Parameter

Prior

Description

Physical unit

_i_

|$U\[49.55, 90\]^\\dagger$|

inclination along the line of sight

degree

|$\\beta \_\\text{star}$|

|$U\[-0.5, 0.5\]$|

stellar anisotropy

\-

|$\\Upsilon \_\\star$|

|$U\[0.1, 10\]$|

stellar mass-to-light ratio

|$M\_{\\odot }/L\_{\\odot }$|

|$\\log \_{10}\\rho \_s$|

|$U\[-6, 0\]$|

DM characteristic density

|$\\frac{\\rho \_s}{M\_\\odot \\text{pc}^{-3}}$|

|$M^\\text{DM}\_{200}$|

|$\\log \_{10} U\[10^{10},10^{15}\]$|

mass at 200 times the critical density of the Universe

|$10^{13}M\_{\\odot }$|

|$r\_s$|

|$U\[10, 30\]$|

DM scale radius

arcsec

|$q\_\\text{DM}$|

|$U\[0.65, 1\]$|

DM axial ratio

\-

|$\\gamma \_\\text{DM}$|

|$U\[0, 2\]$|

DM density slope

\-

|$\\log \_{10}M\_\\text{BH}$|

|$\\log \_{10} U\[8,12\]$|

mass of the SMBH

|$\\frac{M\_\\text{BH}}{M\_{\\odot }}$|

|$\\Upsilon \_0$|

|$U\[0.1, 10\]$|

central stellar mass-to-light ratio|$^\\ddagger$|

|$M\_{\\odot }/L\_{\\odot }$|

|$\\upsilon \_0$|

|$U\[0, 10\]$|

ratio between the central and outermost stellar mass-to-light ratio|$^\\ddagger$|

\-

|$\\delta$|

|$U\[0.1, 1\]$|

smoothness of the stellar mass-to-light ratio|$^\\ddagger$|

arcsec|$^{-1}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$U\[-0.2, 0.2\]$|

elliptical shear component

\-

|$\\epsilon ^{\\text{sh}}\_2$|

|$U\[-0.2, 0.2\]$|

elliptical shear component

\-

|$M\_\\text{Ein}$|

|$N\[5.46, 0.27\]$|

Einstein mass within the tangential ring

|$10^{12}M\_{\\odot }$|

### APPENDIX D: ALTERNATIVE MASS MODELS RESULTS

The median and uncertainties of the parameters in the perturbation models are summarized in Table D1. Units and priors can be checked in Table C1.

Table D1.

Posterior median and |$1\\sigma$| uncertainties for the parameters in the fiducial and perturbation models. Parameter units are given in Table C1.

Parameter

M1

M2

M3

M4

M5

M6

M7

M8

_i_

|$65^{+15}\_{-11}$|

|$66^{+14}\_{-10}$|

|$61^{+11}\_{-7}$|

|$67^{+15}\_{-12}$|

|$59^{+5}\_{-5}$|

|$64^{+17}\_{-11}$|

|$66^{+14}\_{-11}$|

|$69^{+13}\_{-12}$|

|$\\beta ^0\_\\text{star}$|

|$0.07^{+0.06}\_{-0.10}$|

|$-0.14^{+0.20}\_{-0.20}$|

|$0.04^{+0.34}\_{-0.34}$|

|$0.09^{+0.12}\_{-0.15}$|

|$-0.14^{+0.16}\_{-0.14}$|

|$0.03^{+0.05}\_{-0.05}$|

|$-0.01^{+0.10}\_{-0.16}$|

|$-0.17^{+0.14}\_{-0.16}$|

|$\\beta ^1\_\\text{star}$|

\-

\-

|$0.35^{+0.10}\_{-0.18}$|

\-

\-

\-

\-

\-

|$\\beta ^2\_\\text{star}$|

\-

\-

|$-0.01^{+0.08}\_{-0.08}$|

\-

\-

\-

\-

\-

|$\\Upsilon ^0\_\\star$|

|$3.13^{+0.25}\_{-0.26}$|

|$3.24^{+0.28}\_{-0.29}$|

|$3.54^{+0.27}\_{-0.35}$|

|$6.94^{+1.97}\_{-1.70}$|

|$3.35^{+0.30}\_{-0.35}$|

|$3.24^{+0.29}\_{-0.33}$|

|$3.25^{+0.35}\_{-0.33}$|

|$3.65^{+0.33}\_{-0.28}$|

|$\\Upsilon ^1\_\\star$|

\-

\-

\-

|$3.09^{+0.30}\_{-0.26}$|

\-

\-

\-

\-

|$\\Upsilon ^2\_\\star$|

\-

\-

\-

|$2.52^{+0.49}\_{-0.65}$|

\-

\-

\-

\-

|$\\log \_{10}\\rho \_s$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.43^{+0.05}\_{-0.04}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.36^{+0.01}\_{-0.01}$|

|$-2.32^{+0.04}\_{-0.07}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.39^{+0.01}\_{-0.01}$|

|$r\_s$|

\-

\-

\-

\-

|$19.16^{+2.30}\_{-0.97}$|

\-

\-

\-

|$q\_\\text{DM}$|

|$0.98^{+0.01}\_{-0.02}$|

|$0.98^{+0.01}\_{-0.01}$|

|$0.96^{+0.01}\_{-0.01}$|

|$0.96^{+0.02}\_{-0.01}$|

|$0.97^{+0.02}\_{-0.02}$|

|$0.98^{+0.01}\_{-0.02}$|

|$0.97^{+0.01}\_{-0.01}$|

|$0.93^{+0.05}\_{-0.06}$|

|$\\gamma \_\\text{DM}$|

\-

|$1.06^{+0.05}\_{-0.07}$|

\-

\-

\-

\-

\-

\-

|$\\log \_{10}M\_\\text{BH}$|

|$10.56^{+0.07}\_{-0.08}$|

|$10.57^{+0.07}\_{-0.09}$|

|$10.45^{+0.11}\_{-0.14}$|

|$10.53^{+0.10}\_{-0.11}$|

|$10.56^{+0.08}\_{-0.08}$|

|$10.55^{+0.08}\_{-0.09}$|

|$10.55^{+0.08}\_{-0.08}$|

|$10.51^{+0.07}\_{-0.09}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.01^{+0.01}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.02^{+0.02}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.02}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$M\_\\text{Ein}$|

|$5.45^{+0.02}\_{-0.03}$|

|$5.45^{+0.03}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.46^{+0.02}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

\-

Parameter

M1

M2

M3

M4

M5

M6

M7

M8

_i_

|$65^{+15}\_{-11}$|

|$66^{+14}\_{-10}$|

|$61^{+11}\_{-7}$|

|$67^{+15}\_{-12}$|

|$59^{+5}\_{-5}$|

|$64^{+17}\_{-11}$|

|$66^{+14}\_{-11}$|

|$69^{+13}\_{-12}$|

|$\\beta ^0\_\\text{star}$|

|$0.07^{+0.06}\_{-0.10}$|

|$-0.14^{+0.20}\_{-0.20}$|

|$0.04^{+0.34}\_{-0.34}$|

|$0.09^{+0.12}\_{-0.15}$|

|$-0.14^{+0.16}\_{-0.14}$|

|$0.03^{+0.05}\_{-0.05}$|

|$-0.01^{+0.10}\_{-0.16}$|

|$-0.17^{+0.14}\_{-0.16}$|

|$\\beta ^1\_\\text{star}$|

\-

\-

|$0.35^{+0.10}\_{-0.18}$|

\-

\-

\-

\-

\-

|$\\beta ^2\_\\text{star}$|

\-

\-

|$-0.01^{+0.08}\_{-0.08}$|

\-

\-

\-

\-

\-

|$\\Upsilon ^0\_\\star$|

|$3.13^{+0.25}\_{-0.26}$|

|$3.24^{+0.28}\_{-0.29}$|

|$3.54^{+0.27}\_{-0.35}$|

|$6.94^{+1.97}\_{-1.70}$|

|$3.35^{+0.30}\_{-0.35}$|

|$3.24^{+0.29}\_{-0.33}$|

|$3.25^{+0.35}\_{-0.33}$|

|$3.65^{+0.33}\_{-0.28}$|

|$\\Upsilon ^1\_\\star$|

\-

\-

\-

|$3.09^{+0.30}\_{-0.26}$|

\-

\-

\-

\-

|$\\Upsilon ^2\_\\star$|

\-

\-

\-

|$2.52^{+0.49}\_{-0.65}$|

\-

\-

\-

\-

|$\\log \_{10}\\rho \_s$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.43^{+0.05}\_{-0.04}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.36^{+0.01}\_{-0.01}$|

|$-2.32^{+0.04}\_{-0.07}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.39^{+0.01}\_{-0.01}$|

|$r\_s$|

\-

\-

\-

\-

|$19.16^{+2.30}\_{-0.97}$|

\-

\-

\-

|$q\_\\text{DM}$|

|$0.98^{+0.01}\_{-0.02}$|

|$0.98^{+0.01}\_{-0.01}$|

|$0.96^{+0.01}\_{-0.01}$|

|$0.96^{+0.02}\_{-0.01}$|

|$0.97^{+0.02}\_{-0.02}$|

|$0.98^{+0.01}\_{-0.02}$|

|$0.97^{+0.01}\_{-0.01}$|

|$0.93^{+0.05}\_{-0.06}$|

|$\\gamma \_\\text{DM}$|

\-

|$1.06^{+0.05}\_{-0.07}$|

\-

\-

\-

\-

\-

\-

|$\\log \_{10}M\_\\text{BH}$|

|$10.56^{+0.07}\_{-0.08}$|

|$10.57^{+0.07}\_{-0.09}$|

|$10.45^{+0.11}\_{-0.14}$|

|$10.53^{+0.10}\_{-0.11}$|

|$10.56^{+0.08}\_{-0.08}$|

|$10.55^{+0.08}\_{-0.09}$|

|$10.55^{+0.08}\_{-0.08}$|

|$10.51^{+0.07}\_{-0.09}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.01^{+0.01}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.02^{+0.02}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.02}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$M\_\\text{Ein}$|

|$5.45^{+0.02}\_{-0.03}$|

|$5.45^{+0.03}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.46^{+0.02}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

\-

Table D1.

Posterior median and |$1\\sigma$| uncertainties for the parameters in the fiducial and perturbation models. Parameter units are given in Table C1.

Parameter

M1

M2

M3

M4

M5

M6

M7

M8

_i_

|$65^{+15}\_{-11}$|

|$66^{+14}\_{-10}$|

|$61^{+11}\_{-7}$|

|$67^{+15}\_{-12}$|

|$59^{+5}\_{-5}$|

|$64^{+17}\_{-11}$|

|$66^{+14}\_{-11}$|

|$69^{+13}\_{-12}$|

|$\\beta ^0\_\\text{star}$|

|$0.07^{+0.06}\_{-0.10}$|

|$-0.14^{+0.20}\_{-0.20}$|

|$0.04^{+0.34}\_{-0.34}$|

|$0.09^{+0.12}\_{-0.15}$|

|$-0.14^{+0.16}\_{-0.14}$|

|$0.03^{+0.05}\_{-0.05}$|

|$-0.01^{+0.10}\_{-0.16}$|

|$-0.17^{+0.14}\_{-0.16}$|

|$\\beta ^1\_\\text{star}$|

\-

\-

|$0.35^{+0.10}\_{-0.18}$|

\-

\-

\-

\-

\-

|$\\beta ^2\_\\text{star}$|

\-

\-

|$-0.01^{+0.08}\_{-0.08}$|

\-

\-

\-

\-

\-

|$\\Upsilon ^0\_\\star$|

|$3.13^{+0.25}\_{-0.26}$|

|$3.24^{+0.28}\_{-0.29}$|

|$3.54^{+0.27}\_{-0.35}$|

|$6.94^{+1.97}\_{-1.70}$|

|$3.35^{+0.30}\_{-0.35}$|

|$3.24^{+0.29}\_{-0.33}$|

|$3.25^{+0.35}\_{-0.33}$|

|$3.65^{+0.33}\_{-0.28}$|

|$\\Upsilon ^1\_\\star$|

\-

\-

\-

|$3.09^{+0.30}\_{-0.26}$|

\-

\-

\-

\-

|$\\Upsilon ^2\_\\star$|

\-

\-

\-

|$2.52^{+0.49}\_{-0.65}$|

\-

\-

\-

\-

|$\\log \_{10}\\rho \_s$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.43^{+0.05}\_{-0.04}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.36^{+0.01}\_{-0.01}$|

|$-2.32^{+0.04}\_{-0.07}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.39^{+0.01}\_{-0.01}$|

|$r\_s$|

\-

\-

\-

\-

|$19.16^{+2.30}\_{-0.97}$|

\-

\-

\-

|$q\_\\text{DM}$|

|$0.98^{+0.01}\_{-0.02}$|

|$0.98^{+0.01}\_{-0.01}$|

|$0.96^{+0.01}\_{-0.01}$|

|$0.96^{+0.02}\_{-0.01}$|

|$0.97^{+0.02}\_{-0.02}$|

|$0.98^{+0.01}\_{-0.02}$|

|$0.97^{+0.01}\_{-0.01}$|

|$0.93^{+0.05}\_{-0.06}$|

|$\\gamma \_\\text{DM}$|

\-

|$1.06^{+0.05}\_{-0.07}$|

\-

\-

\-

\-

\-

\-

|$\\log \_{10}M\_\\text{BH}$|

|$10.56^{+0.07}\_{-0.08}$|

|$10.57^{+0.07}\_{-0.09}$|

|$10.45^{+0.11}\_{-0.14}$|

|$10.53^{+0.10}\_{-0.11}$|

|$10.56^{+0.08}\_{-0.08}$|

|$10.55^{+0.08}\_{-0.09}$|

|$10.55^{+0.08}\_{-0.08}$|

|$10.51^{+0.07}\_{-0.09}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.01^{+0.01}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.02^{+0.02}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.02}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$M\_\\text{Ein}$|

|$5.45^{+0.02}\_{-0.03}$|

|$5.45^{+0.03}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.46^{+0.02}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

\-

Parameter

M1

M2

M3

M4

M5

M6

M7

M8

_i_

|$65^{+15}\_{-11}$|

|$66^{+14}\_{-10}$|

|$61^{+11}\_{-7}$|

|$67^{+15}\_{-12}$|

|$59^{+5}\_{-5}$|

|$64^{+17}\_{-11}$|

|$66^{+14}\_{-11}$|

|$69^{+13}\_{-12}$|

|$\\beta ^0\_\\text{star}$|

|$0.07^{+0.06}\_{-0.10}$|

|$-0.14^{+0.20}\_{-0.20}$|

|$0.04^{+0.34}\_{-0.34}$|

|$0.09^{+0.12}\_{-0.15}$|

|$-0.14^{+0.16}\_{-0.14}$|

|$0.03^{+0.05}\_{-0.05}$|

|$-0.01^{+0.10}\_{-0.16}$|

|$-0.17^{+0.14}\_{-0.16}$|

|$\\beta ^1\_\\text{star}$|

\-

\-

|$0.35^{+0.10}\_{-0.18}$|

\-

\-

\-

\-

\-

|$\\beta ^2\_\\text{star}$|

\-

\-

|$-0.01^{+0.08}\_{-0.08}$|

\-

\-

\-

\-

\-

|$\\Upsilon ^0\_\\star$|

|$3.13^{+0.25}\_{-0.26}$|

|$3.24^{+0.28}\_{-0.29}$|

|$3.54^{+0.27}\_{-0.35}$|

|$6.94^{+1.97}\_{-1.70}$|

|$3.35^{+0.30}\_{-0.35}$|

|$3.24^{+0.29}\_{-0.33}$|

|$3.25^{+0.35}\_{-0.33}$|

|$3.65^{+0.33}\_{-0.28}$|

|$\\Upsilon ^1\_\\star$|

\-

\-

\-

|$3.09^{+0.30}\_{-0.26}$|

\-

\-

\-

\-

|$\\Upsilon ^2\_\\star$|

\-

\-

\-

|$2.52^{+0.49}\_{-0.65}$|

\-

\-

\-

\-

|$\\log \_{10}\\rho \_s$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.43^{+0.05}\_{-0.04}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.36^{+0.01}\_{-0.01}$|

|$-2.32^{+0.04}\_{-0.07}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.38^{+0.01}\_{-0.01}$|

|$-2.39^{+0.01}\_{-0.01}$|

|$r\_s$|

\-

\-

\-

\-

|$19.16^{+2.30}\_{-0.97}$|

\-

\-

\-

|$q\_\\text{DM}$|

|$0.98^{+0.01}\_{-0.02}$|

|$0.98^{+0.01}\_{-0.01}$|

|$0.96^{+0.01}\_{-0.01}$|

|$0.96^{+0.02}\_{-0.01}$|

|$0.97^{+0.02}\_{-0.02}$|

|$0.98^{+0.01}\_{-0.02}$|

|$0.97^{+0.01}\_{-0.01}$|

|$0.93^{+0.05}\_{-0.06}$|

|$\\gamma \_\\text{DM}$|

\-

|$1.06^{+0.05}\_{-0.07}$|

\-

\-

\-

\-

\-

\-

|$\\log \_{10}M\_\\text{BH}$|

|$10.56^{+0.07}\_{-0.08}$|

|$10.57^{+0.07}\_{-0.09}$|

|$10.45^{+0.11}\_{-0.14}$|

|$10.53^{+0.10}\_{-0.11}$|

|$10.56^{+0.08}\_{-0.08}$|

|$10.55^{+0.08}\_{-0.09}$|

|$10.55^{+0.08}\_{-0.08}$|

|$10.51^{+0.07}\_{-0.09}$|

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.01^{+0.01}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.02^{+0.02}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.02}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$M\_\\text{Ein}$|

|$5.45^{+0.02}\_{-0.03}$|

|$5.45^{+0.03}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.46^{+0.02}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

\-

The median and uncertainties of the parameters in the alternative models are summarized in Table D2. Units and priors can be checked in Table C1.

Table D2.

Inferred median and |$1\\sigma$| credible intervals for the parameters of alternative models **M9**–**M13**, and for the models without the SMBH contribution (**M14** and **M15**). Parameter units are given in Table C1.

Parameter

M9

M10

M11

M12

M13

M14

M15

_i_

|$71^{+10}\_{-8}$|

|$75^{+10}\_{-8}$|

|$75^{+8}\_{-10}$|

|$76^{+9}\_{-12}$|

|$65^{+20}\_{-11}$|

|$79^{+7}\_{-9}$|

|$79^{+7}\_{-10}$|

|$\\beta ^0\_\\text{star}$|

|$-0.21^{+0.17}\_{-0.13}$|

|$-0.07^{+0.21}\_{-0.62}$|

|$-0.01^{+0.24}\_{-0.24}$|

|$-0.02^{+0.24}\_{-0.28}$|

|$0.08^{+0.25}\_{-0.15}$|

|$0.28^{+0.04}\_{-0.04}$|

|$0.42^{+0.05}\_{-0.08}$|

|$\\beta ^1\_\\text{star}$|

|$-0.05^{+0.41}\_{-0.15}$|

|$-0.51^{+0.87}\_{-0.40}$|

|$0.42^{+0.06}\_{-0.11}$|

|$0.34^{+0.09}\_{-0.10}$|

|$-0.39^{+0.22}\_{-0.07}$|

\-

\-

|$\\beta ^2\_\\text{star}$|

|$-0.02^{+0.16}\_{-0.17}$|

|$-0.34^{+0.36}\_{-0.39}$|

|$-0.29^{+0.19}\_{-0.14}$|

|$-0.10^{+0.24}\_{-0.23}$|

|$-0.26^{+0.16}\_{-0.11}$|

\-

\-

|$\\beta ^3\_\\text{star}$|

\-

|$0.12^{+0.18}\_{-0.32}$|

\-

\-

\-

\-

\-

|$\\beta ^4\_\\text{star}$|

\-

|$0.37^{+0.16}\_{-0.42}$|

\-

\-

\-

\-

\-

|$\\beta ^5\_\\text{star}$|

\-

|$0.05^{+0.21}\_{-0.27}$|

\-

\-

\-

\-

\-

|$\\beta ^6\_\\text{star}$|

\-

|$-0.43^{+0.13}\_{-0.17}$|

\-

\-

\-

\-

\-

|$\\beta ^7\_\\text{star}$|

\-

|$0.13^{+0.09}\_{-0.05}$|

\-

\-

\-

\-

\-

|$\\Upsilon ^0\_\\star$|

|$5.17^{+1.19}\_{-0.84}$|

\-

|$5.39^{+1.81}\_{-1.33}$|

|$5.79^{+2.40}\_{-1.64}$|

|$4.51^{+1.24}\_{-0.89}$|

|$4.14^{+0.08}\_{-0.07}$|

|$7.57^{+1.71}\_{-2.26}$|

|$\\Upsilon ^1\_\\star$|

|$3.21^{+0.79}\_{-0.48}$|

\-

|$3.63^{+0.32}\_{-0.35}$|

|$3.14^{+0.16}\_{-0.22}$|

|$3.16^{+0.34}\_{-0.20}$|

\-

|$3.90^{+0.19}\_{-0.13}$|

|$\\Upsilon ^2\_\\star$|

|$1.66^{+1.87}\_{-0.83}$|

\-

|$2.75^{+0.61}\_{-1.04}$|

|$1.55^{+0.70}\_{-0.77}$|

|$2.69^{+0.48}\_{-0.62}$|

\-

|$1.29^{+0.90}\_{-0.70}$|

|$\\Upsilon \_0$|

\-

|$4.38^{+0.57}\_{-1.31}$|

\-

\-

\-

\-

\-

|$\\upsilon \_0$|

\-

|$0.53^{+0.08}\_{-0.08}$|

\-

\-

\-

\-

\-

|$\\delta$|

\-

|$7.77^{+1.72}\_{-7.20}$|

\-

\-

\-

\-

\-

|$\\log \_{10}\\rho \_s$|

|$-2.41^{+0.04}\_{-0.05}$|

|$-2.38^{+0.01}\_{-0.01}$|

\-

\-

\-

|$-2.40^{+0.01}\_{-0.01}$|

|$-2.36^{+0.01}\_{-0.02}$|

|$M^\\text{DM}\_{200}$|

\-

\-

|$8.36^{+1.48}\_{-1.22}$|

|$11.1^{+4.36}\_{-2.84}$|

|$9.52^{+1.28}\_{-7.92}$|

\-

\-

|$q\_\\text{DM}$|

|$0.97^{+0.03}\_{-0.02}$|

\-

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.98^{+0.01}\_{-0.01}$|

|$r\_s$|

\-

\-

|$27.96^{+2.10}\_{-1.90}$|

|$44.89^{+7.14}\_{-5.51}$|

|$20.97^{+1.21}\_{-0.80}$|

\-

\-

|$\\gamma \_\\text{DM}$|

|$1.08^{+0.06}\_{-0.07}$|

\-

|$1.29^{+0.05}\_{-0.04}$|

|$1.34^{+0.07}\_{-0.07}$|

|$1.12^{+0.03}\_{-0.04}$|

\-

\-

|$\\log \_{10}M\_\\text{BH}$|

|$10.50^{+0.10}\_{-0.32}$|

|$10.55^{+0.10}\_{-0.07}$|

|$10.15^{+0.17}\_{-0.30}$|

|$10.33^{+0.07}\_{-0.13}$|

|$10.59^{+0.04}\_{-0.10}$|

\-

\-

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.03^{+0.01}\_{-0.01}$|

|$0.00^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.01^{+0.01}\_{-0.01}$|

|$-0.02^{+0.02}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.02}\_{-0.01}$|

|$M\_\\text{Ein}$|

|$5.45^{+0.02}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.44^{+0.02}\_{-0.02}$|

|$5.43^{+0.02}\_{-0.02}$|

|$5.43^{+0.02}\_{-0.02}$|

|$5.46^{+0.02}\_{-0.03}$|

|$5.45^{+0.03}\_{-0.03}$|

Parameter

M9

M10

M11

M12

M13

M14

M15

_i_

|$71^{+10}\_{-8}$|

|$75^{+10}\_{-8}$|

|$75^{+8}\_{-10}$|

|$76^{+9}\_{-12}$|

|$65^{+20}\_{-11}$|

|$79^{+7}\_{-9}$|

|$79^{+7}\_{-10}$|

|$\\beta ^0\_\\text{star}$|

|$-0.21^{+0.17}\_{-0.13}$|

|$-0.07^{+0.21}\_{-0.62}$|

|$-0.01^{+0.24}\_{-0.24}$|

|$-0.02^{+0.24}\_{-0.28}$|

|$0.08^{+0.25}\_{-0.15}$|

|$0.28^{+0.04}\_{-0.04}$|

|$0.42^{+0.05}\_{-0.08}$|

|$\\beta ^1\_\\text{star}$|

|$-0.05^{+0.41}\_{-0.15}$|

|$-0.51^{+0.87}\_{-0.40}$|

|$0.42^{+0.06}\_{-0.11}$|

|$0.34^{+0.09}\_{-0.10}$|

|$-0.39^{+0.22}\_{-0.07}$|

\-

\-

|$\\beta ^2\_\\text{star}$|

|$-0.02^{+0.16}\_{-0.17}$|

|$-0.34^{+0.36}\_{-0.39}$|

|$-0.29^{+0.19}\_{-0.14}$|

|$-0.10^{+0.24}\_{-0.23}$|

|$-0.26^{+0.16}\_{-0.11}$|

\-

\-

|$\\beta ^3\_\\text{star}$|

\-

|$0.12^{+0.18}\_{-0.32}$|

\-

\-

\-

\-

\-

|$\\beta ^4\_\\text{star}$|

\-

|$0.37^{+0.16}\_{-0.42}$|

\-

\-

\-

\-

\-

|$\\beta ^5\_\\text{star}$|

\-

|$0.05^{+0.21}\_{-0.27}$|

\-

\-

\-

\-

\-

|$\\beta ^6\_\\text{star}$|

\-

|$-0.43^{+0.13}\_{-0.17}$|

\-

\-

\-

\-

\-

|$\\beta ^7\_\\text{star}$|

\-

|$0.13^{+0.09}\_{-0.05}$|

\-

\-

\-

\-

\-

|$\\Upsilon ^0\_\\star$|

|$5.17^{+1.19}\_{-0.84}$|

\-

|$5.39^{+1.81}\_{-1.33}$|

|$5.79^{+2.40}\_{-1.64}$|

|$4.51^{+1.24}\_{-0.89}$|

|$4.14^{+0.08}\_{-0.07}$|

|$7.57^{+1.71}\_{-2.26}$|

|$\\Upsilon ^1\_\\star$|

|$3.21^{+0.79}\_{-0.48}$|

\-

|$3.63^{+0.32}\_{-0.35}$|

|$3.14^{+0.16}\_{-0.22}$|

|$3.16^{+0.34}\_{-0.20}$|

\-

|$3.90^{+0.19}\_{-0.13}$|

|$\\Upsilon ^2\_\\star$|

|$1.66^{+1.87}\_{-0.83}$|

\-

|$2.75^{+0.61}\_{-1.04}$|

|$1.55^{+0.70}\_{-0.77}$|

|$2.69^{+0.48}\_{-0.62}$|

\-

|$1.29^{+0.90}\_{-0.70}$|

|$\\Upsilon \_0$|

\-

|$4.38^{+0.57}\_{-1.31}$|

\-

\-

\-

\-

\-

|$\\upsilon \_0$|

\-

|$0.53^{+0.08}\_{-0.08}$|

\-

\-

\-

\-

\-

|$\\delta$|

\-

|$7.77^{+1.72}\_{-7.20}$|

\-

\-

\-

\-

\-

|$\\log \_{10}\\rho \_s$|

|$-2.41^{+0.04}\_{-0.05}$|

|$-2.38^{+0.01}\_{-0.01}$|

\-

\-

\-

|$-2.40^{+0.01}\_{-0.01}$|

|$-2.36^{+0.01}\_{-0.02}$|

|$M^\\text{DM}\_{200}$|

\-

\-

|$8.36^{+1.48}\_{-1.22}$|

|$11.1^{+4.36}\_{-2.84}$|

|$9.52^{+1.28}\_{-7.92}$|

\-

\-

|$q\_\\text{DM}$|

|$0.97^{+0.03}\_{-0.02}$|

\-

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.98^{+0.01}\_{-0.01}$|

|$r\_s$|

\-

\-

|$27.96^{+2.10}\_{-1.90}$|

|$44.89^{+7.14}\_{-5.51}$|

|$20.97^{+1.21}\_{-0.80}$|

\-

\-

|$\\gamma \_\\text{DM}$|

|$1.08^{+0.06}\_{-0.07}$|

\-

|$1.29^{+0.05}\_{-0.04}$|

|$1.34^{+0.07}\_{-0.07}$|

|$1.12^{+0.03}\_{-0.04}$|

\-

\-

|$\\log \_{10}M\_\\text{BH}$|

|$10.50^{+0.10}\_{-0.32}$|

|$10.55^{+0.10}\_{-0.07}$|

|$10.15^{+0.17}\_{-0.30}$|

|$10.33^{+0.07}\_{-0.13}$|

|$10.59^{+0.04}\_{-0.10}$|

\-

\-

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.03^{+0.01}\_{-0.01}$|

|$0.00^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.01^{+0.01}\_{-0.01}$|

|$-0.02^{+0.02}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.02}\_{-0.01}$|

|$M\_\\text{Ein}$|

|$5.45^{+0.02}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.44^{+0.02}\_{-0.02}$|

|$5.43^{+0.02}\_{-0.02}$|

|$5.43^{+0.02}\_{-0.02}$|

|$5.46^{+0.02}\_{-0.03}$|

|$5.45^{+0.03}\_{-0.03}$|

Table D2.

Inferred median and |$1\\sigma$| credible intervals for the parameters of alternative models **M9**–**M13**, and for the models without the SMBH contribution (**M14** and **M15**). Parameter units are given in Table C1.

Parameter

M9

M10

M11

M12

M13

M14

M15

_i_

|$71^{+10}\_{-8}$|

|$75^{+10}\_{-8}$|

|$75^{+8}\_{-10}$|

|$76^{+9}\_{-12}$|

|$65^{+20}\_{-11}$|

|$79^{+7}\_{-9}$|

|$79^{+7}\_{-10}$|

|$\\beta ^0\_\\text{star}$|

|$-0.21^{+0.17}\_{-0.13}$|

|$-0.07^{+0.21}\_{-0.62}$|

|$-0.01^{+0.24}\_{-0.24}$|

|$-0.02^{+0.24}\_{-0.28}$|

|$0.08^{+0.25}\_{-0.15}$|

|$0.28^{+0.04}\_{-0.04}$|

|$0.42^{+0.05}\_{-0.08}$|

|$\\beta ^1\_\\text{star}$|

|$-0.05^{+0.41}\_{-0.15}$|

|$-0.51^{+0.87}\_{-0.40}$|

|$0.42^{+0.06}\_{-0.11}$|

|$0.34^{+0.09}\_{-0.10}$|

|$-0.39^{+0.22}\_{-0.07}$|

\-

\-

|$\\beta ^2\_\\text{star}$|

|$-0.02^{+0.16}\_{-0.17}$|

|$-0.34^{+0.36}\_{-0.39}$|

|$-0.29^{+0.19}\_{-0.14}$|

|$-0.10^{+0.24}\_{-0.23}$|

|$-0.26^{+0.16}\_{-0.11}$|

\-

\-

|$\\beta ^3\_\\text{star}$|

\-

|$0.12^{+0.18}\_{-0.32}$|

\-

\-

\-

\-

\-

|$\\beta ^4\_\\text{star}$|

\-

|$0.37^{+0.16}\_{-0.42}$|

\-

\-

\-

\-

\-

|$\\beta ^5\_\\text{star}$|

\-

|$0.05^{+0.21}\_{-0.27}$|

\-

\-

\-

\-

\-

|$\\beta ^6\_\\text{star}$|

\-

|$-0.43^{+0.13}\_{-0.17}$|

\-

\-

\-

\-

\-

|$\\beta ^7\_\\text{star}$|

\-

|$0.13^{+0.09}\_{-0.05}$|

\-

\-

\-

\-

\-

|$\\Upsilon ^0\_\\star$|

|$5.17^{+1.19}\_{-0.84}$|

\-

|$5.39^{+1.81}\_{-1.33}$|

|$5.79^{+2.40}\_{-1.64}$|

|$4.51^{+1.24}\_{-0.89}$|

|$4.14^{+0.08}\_{-0.07}$|

|$7.57^{+1.71}\_{-2.26}$|

|$\\Upsilon ^1\_\\star$|

|$3.21^{+0.79}\_{-0.48}$|

\-

|$3.63^{+0.32}\_{-0.35}$|

|$3.14^{+0.16}\_{-0.22}$|

|$3.16^{+0.34}\_{-0.20}$|

\-

|$3.90^{+0.19}\_{-0.13}$|

|$\\Upsilon ^2\_\\star$|

|$1.66^{+1.87}\_{-0.83}$|

\-

|$2.75^{+0.61}\_{-1.04}$|

|$1.55^{+0.70}\_{-0.77}$|

|$2.69^{+0.48}\_{-0.62}$|

\-

|$1.29^{+0.90}\_{-0.70}$|

|$\\Upsilon \_0$|

\-

|$4.38^{+0.57}\_{-1.31}$|

\-

\-

\-

\-

\-

|$\\upsilon \_0$|

\-

|$0.53^{+0.08}\_{-0.08}$|

\-

\-

\-

\-

\-

|$\\delta$|

\-

|$7.77^{+1.72}\_{-7.20}$|

\-

\-

\-

\-

\-

|$\\log \_{10}\\rho \_s$|

|$-2.41^{+0.04}\_{-0.05}$|

|$-2.38^{+0.01}\_{-0.01}$|

\-

\-

\-

|$-2.40^{+0.01}\_{-0.01}$|

|$-2.36^{+0.01}\_{-0.02}$|

|$M^\\text{DM}\_{200}$|

\-

\-

|$8.36^{+1.48}\_{-1.22}$|

|$11.1^{+4.36}\_{-2.84}$|

|$9.52^{+1.28}\_{-7.92}$|

\-

\-

|$q\_\\text{DM}$|

|$0.97^{+0.03}\_{-0.02}$|

\-

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.98^{+0.01}\_{-0.01}$|

|$r\_s$|

\-

\-

|$27.96^{+2.10}\_{-1.90}$|

|$44.89^{+7.14}\_{-5.51}$|

|$20.97^{+1.21}\_{-0.80}$|

\-

\-

|$\\gamma \_\\text{DM}$|

|$1.08^{+0.06}\_{-0.07}$|

\-

|$1.29^{+0.05}\_{-0.04}$|

|$1.34^{+0.07}\_{-0.07}$|

|$1.12^{+0.03}\_{-0.04}$|

\-

\-

|$\\log \_{10}M\_\\text{BH}$|

|$10.50^{+0.10}\_{-0.32}$|

|$10.55^{+0.10}\_{-0.07}$|

|$10.15^{+0.17}\_{-0.30}$|

|$10.33^{+0.07}\_{-0.13}$|

|$10.59^{+0.04}\_{-0.10}$|

\-

\-

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.03^{+0.01}\_{-0.01}$|

|$0.00^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.01^{+0.01}\_{-0.01}$|

|$-0.02^{+0.02}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.02}\_{-0.01}$|

|$M\_\\text{Ein}$|

|$5.45^{+0.02}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.44^{+0.02}\_{-0.02}$|

|$5.43^{+0.02}\_{-0.02}$|

|$5.43^{+0.02}\_{-0.02}$|

|$5.46^{+0.02}\_{-0.03}$|

|$5.45^{+0.03}\_{-0.03}$|

Parameter

M9

M10

M11

M12

M13

M14

M15

_i_

|$71^{+10}\_{-8}$|

|$75^{+10}\_{-8}$|

|$75^{+8}\_{-10}$|

|$76^{+9}\_{-12}$|

|$65^{+20}\_{-11}$|

|$79^{+7}\_{-9}$|

|$79^{+7}\_{-10}$|

|$\\beta ^0\_\\text{star}$|

|$-0.21^{+0.17}\_{-0.13}$|

|$-0.07^{+0.21}\_{-0.62}$|

|$-0.01^{+0.24}\_{-0.24}$|

|$-0.02^{+0.24}\_{-0.28}$|

|$0.08^{+0.25}\_{-0.15}$|

|$0.28^{+0.04}\_{-0.04}$|

|$0.42^{+0.05}\_{-0.08}$|

|$\\beta ^1\_\\text{star}$|

|$-0.05^{+0.41}\_{-0.15}$|

|$-0.51^{+0.87}\_{-0.40}$|

|$0.42^{+0.06}\_{-0.11}$|

|$0.34^{+0.09}\_{-0.10}$|

|$-0.39^{+0.22}\_{-0.07}$|

\-

\-

|$\\beta ^2\_\\text{star}$|

|$-0.02^{+0.16}\_{-0.17}$|

|$-0.34^{+0.36}\_{-0.39}$|

|$-0.29^{+0.19}\_{-0.14}$|

|$-0.10^{+0.24}\_{-0.23}$|

|$-0.26^{+0.16}\_{-0.11}$|

\-

\-

|$\\beta ^3\_\\text{star}$|

\-

|$0.12^{+0.18}\_{-0.32}$|

\-

\-

\-

\-

\-

|$\\beta ^4\_\\text{star}$|

\-

|$0.37^{+0.16}\_{-0.42}$|

\-

\-

\-

\-

\-

|$\\beta ^5\_\\text{star}$|

\-

|$0.05^{+0.21}\_{-0.27}$|

\-

\-

\-

\-

\-

|$\\beta ^6\_\\text{star}$|

\-

|$-0.43^{+0.13}\_{-0.17}$|

\-

\-

\-

\-

\-

|$\\beta ^7\_\\text{star}$|

\-

|$0.13^{+0.09}\_{-0.05}$|

\-

\-

\-

\-

\-

|$\\Upsilon ^0\_\\star$|

|$5.17^{+1.19}\_{-0.84}$|

\-

|$5.39^{+1.81}\_{-1.33}$|

|$5.79^{+2.40}\_{-1.64}$|

|$4.51^{+1.24}\_{-0.89}$|

|$4.14^{+0.08}\_{-0.07}$|

|$7.57^{+1.71}\_{-2.26}$|

|$\\Upsilon ^1\_\\star$|

|$3.21^{+0.79}\_{-0.48}$|

\-

|$3.63^{+0.32}\_{-0.35}$|

|$3.14^{+0.16}\_{-0.22}$|

|$3.16^{+0.34}\_{-0.20}$|

\-

|$3.90^{+0.19}\_{-0.13}$|

|$\\Upsilon ^2\_\\star$|

|$1.66^{+1.87}\_{-0.83}$|

\-

|$2.75^{+0.61}\_{-1.04}$|

|$1.55^{+0.70}\_{-0.77}$|

|$2.69^{+0.48}\_{-0.62}$|

\-

|$1.29^{+0.90}\_{-0.70}$|

|$\\Upsilon \_0$|

\-

|$4.38^{+0.57}\_{-1.31}$|

\-

\-

\-

\-

\-

|$\\upsilon \_0$|

\-

|$0.53^{+0.08}\_{-0.08}$|

\-

\-

\-

\-

\-

|$\\delta$|

\-

|$7.77^{+1.72}\_{-7.20}$|

\-

\-

\-

\-

\-

|$\\log \_{10}\\rho \_s$|

|$-2.41^{+0.04}\_{-0.05}$|

|$-2.38^{+0.01}\_{-0.01}$|

\-

\-

\-

|$-2.40^{+0.01}\_{-0.01}$|

|$-2.36^{+0.01}\_{-0.02}$|

|$M^\\text{DM}\_{200}$|

\-

\-

|$8.36^{+1.48}\_{-1.22}$|

|$11.1^{+4.36}\_{-2.84}$|

|$9.52^{+1.28}\_{-7.92}$|

\-

\-

|$q\_\\text{DM}$|

|$0.97^{+0.03}\_{-0.02}$|

\-

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.99^{+0.01}\_{-0.01}$|

|$0.98^{+0.01}\_{-0.01}$|

|$r\_s$|

\-

\-

|$27.96^{+2.10}\_{-1.90}$|

|$44.89^{+7.14}\_{-5.51}$|

|$20.97^{+1.21}\_{-0.80}$|

\-

\-

|$\\gamma \_\\text{DM}$|

|$1.08^{+0.06}\_{-0.07}$|

\-

|$1.29^{+0.05}\_{-0.04}$|

|$1.34^{+0.07}\_{-0.07}$|

|$1.12^{+0.03}\_{-0.04}$|

\-

\-

|$\\log \_{10}M\_\\text{BH}$|

|$10.50^{+0.10}\_{-0.32}$|

|$10.55^{+0.10}\_{-0.07}$|

|$10.15^{+0.17}\_{-0.30}$|

|$10.33^{+0.07}\_{-0.13}$|

|$10.59^{+0.04}\_{-0.10}$|

\-

\-

|$\\epsilon ^{\\text{sh}}\_1$|

|$-0.03^{+0.01}\_{-0.01}$|

|$0.00^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.03^{+0.01}\_{-0.01}$|

|$-0.01^{+0.01}\_{-0.01}$|

|$-0.02^{+0.02}\_{-0.01}$|

|$-0.02^{+0.01}\_{-0.01}$|

|$\\epsilon ^{\\text{sh}}\_2$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.06^{+0.01}\_{-0.01}$|

|$-0.05^{+0.01}\_{-0.01}$|

|$-0.05^{+0.02}\_{-0.01}$|

|$M\_\\text{Ein}$|

|$5.45^{+0.02}\_{-0.03}$|

|$5.45^{+0.02}\_{-0.02}$|

|$5.44^{+0.02}\_{-0.02}$|

|$5.43^{+0.02}\_{-0.02}$|

|$5.43^{+0.02}\_{-0.02}$|

|$5.46^{+0.02}\_{-0.03}$|

|$5.45^{+0.03}\_{-0.03}$|

© The Author(s) 2025. Published by Oxford University Press on behalf of Royal Astronomical Society.

This is an Open Access article distributed under the terms of the Creative Commons Attribution License ([https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)), which permits unrestricted reuse, distribution, and reproduction in any medium, provided the original work is properly cited.