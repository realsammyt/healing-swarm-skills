# Evidence Box Template

> Template for presenting clinical research findings in healing applications.

---

## Structure

```markdown
## What Research Suggests

**Topic:** [Specific claim or practice being evaluated]

**Evidence Level:** [Strong | Moderate | Preliminary | Traditional Use Only]

---

### Summary

[2-3 sentences summarizing the research in accessible language.
Use appropriate evidence language based on level.]

### Key Finding

[Specific study or meta-analysis detail:]
- **Study type:** [RCT / Meta-analysis / Cohort / etc.]
- **Participants:** [N participants, key characteristics]
- **Intervention:** [What was done]
- **Finding:** [What was found]
- **Effect size:** [If available and meaningful]

### Limitations

[What we don't know or what limits these findings:]
- [Limitation 1]
- [Limitation 2]

### What This Means for Practice

[1-2 sentences on practical implications, appropriately qualified]

---

**Source:**
[Full citation in standard format]
PMID: [Number] | DOI: [Number]

*Note: This information is for educational purposes. It does not replace
medical advice. Consult your healthcare provider for guidance.*
```

---

## Evidence Level Guidelines

### Strong Evidence

**Criteria:**
- Multiple well-designed RCTs
- Systematic reviews/meta-analyses
- Consistent findings across studies
- Clinically meaningful effect sizes

**Language to use:**
- "Research demonstrates..."
- "Studies consistently show..."
- "Strong evidence supports..."

### Moderate Evidence

**Criteria:**
- Some RCTs with methodological limitations
- Generally consistent findings
- Effect sizes meaningful but variable

**Language to use:**
- "Studies suggest..."
- "Research indicates..."
- "Moderate evidence supports..."

### Preliminary Evidence

**Criteria:**
- Limited RCTs or mostly observational studies
- Mixed or inconsistent findings
- Small sample sizes
- Effect sizes uncertain

**Language to use:**
- "Early research indicates..."
- "Preliminary findings suggest..."
- "Initial studies show..."

### Traditional Use Only

**Criteria:**
- No clinical trials
- Only traditional/historical use documented
- Mechanism plausible but untested

**Language to use:**
- "Traditionally used for..."
- "Historical use suggests..."
- "While clinical research is lacking, traditional practitioners report..."

---

## Citation Format

### Journal Articles

```
Author(s). Title. Journal. Year;Volume(Issue):Pages.
PMID: 12345678
DOI: 10.xxxx/xxxxx
```

**Example:**
```
Au DWH, Tsang HWH, Ling PPM, et al. Effects of acupressure on anxiety:
A systematic review and meta-analysis. J Anxiety Disord. 2015;36:88-101.
PMID: 26422606
DOI: 10.1016/j.janxdis.2015.09.011
```

### Cochrane Reviews

```
Author(s). Title. Cochrane Database Syst Rev. Year;Issue:Article number.
DOI: 10.1002/14651858.CDxxxxxx
```

### Meta-Analyses

```
Author(s). Title. Journal. Year;Volume(Issue):Pages.
PMID: xxxxxxxx
[Note: Meta-analysis of N studies, total N=xxxx participants]
```

---

## Writing Guidelines

### Translating Research

| Technical Term | Accessible Version |
|----------------|-------------------|
| Randomized controlled trial | A rigorous study where participants were randomly assigned to treatment or control |
| Statistically significant | The difference was unlikely to be due to chance |
| Effect size | The magnitude of the benefit |
| Heterogeneity | Variation in results across studies |
| Placebo-controlled | Compared against an inactive treatment |
| Sham acupuncture | Fake acupuncture designed to look real |
| Intention-to-treat | All participants counted, even dropouts |

### Explaining Limitations

**Common limitations to mention:**

| Limitation | How to Explain |
|------------|----------------|
| Small sample size | "Based on a small number of participants, so results need confirmation" |
| Short follow-up | "Effects measured only in short term; longer-term benefits unknown" |
| Self-reported outcomes | "Based on participants' own reports, which can be subjective" |
| Blinding difficult | "Participants knew which treatment they received, which may influence results" |
| Publication bias possible | "Negative results may not have been published" |
| Single study | "Only one study so far; needs replication" |

### Avoiding Overclaiming

| Instead of... | Use... |
|---------------|--------|
| "Proven to work" | "Studies suggest it may help" |
| "Science shows" | "Research indicates" |
| "Cures" | "May support improvement in" |
| "Effective treatment" | "May be helpful as a complement to care" |
| "100% of patients" | "Many participants in the study" |

---

## Layout Variations

### Compact Version (In-line)

```markdown
📊 **Research note:** Studies suggest acupressure may reduce anxiety symptoms
(meta-analysis of 39 RCTs, N=3,642). Effects varied by method and duration.
[PMID: 26422606]
```

### Standard Version (Card)

```markdown
┌──────────────────────────────────────────────────────────────┐
│ 📊 WHAT RESEARCH SUGGESTS                                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ **Evidence level:** Moderate                                 │
│                                                              │
│ Studies suggest acupressure may reduce anxiety symptoms.     │
│ A meta-analysis of 39 randomized trials (N=3,642) found      │
│ moderate benefits compared to control conditions.            │
│                                                              │
│ **Limitations:** Most studies had methodological issues.     │
│ Effects varied by type and duration of treatment.            │
│                                                              │
│ Source: Au et al., J Anxiety Disord. 2015                   │
│ PMID: 26422606                                               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Expanded Version (Full Detail)

Use the complete template structure for in-depth evidence presentation.

---

## Example: Complete Evidence Box

```markdown
## What Research Suggests

**Topic:** Guided imagery for post-surgical pain management

**Evidence Level:** Moderate

---

### Summary

Studies suggest that guided imagery may help reduce pain after surgery
and decrease the need for pain medication. Multiple controlled trials
have found benefits, though results vary based on the type of imagery
used and timing of intervention.

### Key Finding

A meta-analysis examined 39 studies of guided imagery for acute and
chronic pain:
- **Study type:** Systematic review and meta-analysis
- **Participants:** 2,597 patients across all studies
- **Intervention:** Guided imagery (various protocols)
- **Finding:** Moderate reduction in pain intensity vs. control
- **Effect size:** Standardized mean difference of -0.43 (95% CI: -0.58 to -0.28)

### Limitations

- Significant variation across studies in imagery protocols used
- Blinding impossible—participants knew if they received imagery
- Most studies were in hospital settings; home use less studied
- Long-term effects beyond recovery period unknown

### What This Means for Practice

Guided imagery may be a helpful addition to standard post-surgical care,
potentially reducing pain and medication needs. It works best as a
complement to, not replacement for, medical pain management.

---

**Source:**
Posadzki P, Lewandowski W, Terry R, et al. Guided imagery for
musculoskeletal pain: A systematic review. Clin J Pain. 2012;28(7):635-44.
PMID: 22699132 | DOI: 10.1097/AJP.0b013e31823cc766

*Note: This information is for educational purposes. It does not replace
medical advice. Consult your healthcare provider for guidance.*
```

---

## Quality Checklist

Before finalizing an evidence box:

- [ ] Evidence level accurately reflects study quality
- [ ] Language matches evidence level (no overclaiming)
- [ ] Key study details included (type, N, finding)
- [ ] Limitations honestly noted
- [ ] PMID or DOI provided
- [ ] Citation is complete and accurate
- [ ] Language accessible to general reader
- [ ] Disclaimer present
- [ ] No medical claims or treatment recommendations
- [ ] Practical implications appropriately qualified

---

## Common Topics for Evidence Boxes

| Topic | Evidence Level | Key Consideration |
|-------|----------------|-------------------|
| Meditation for anxiety | Moderate-Strong | Many studies, varied protocols |
| Acupressure for pain | Moderate | Blinding issues, varied points |
| Guided imagery for healing | Moderate | Protocol variation matters |
| Prayer for health outcomes | Low-Preliminary | Methodologically challenging |
| Breathwork for stress | Moderate | Consistent findings |
| Visualization for immune function | Preliminary | Limited direct evidence |
| Mindfulness for chronic pain | Strong | Well-studied, replicated |

---

*"Evidence presented honestly builds trust. Overstated claims destroy it."*
