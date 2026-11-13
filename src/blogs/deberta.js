export const debertaPost = {
  slug: "deberta-understanding-how-microsoft-made-bert-better",
  title: "DeBERTa: Understanding How Microsoft Made BERT Better",
  subtitle: "A look at how Microsoft improved BERT with Disentangled Attention and Enhanced Mask Decoder.",
  author: "Sarthak Maurya",
  date: "Oct 11, 2026",
  readTime: "14 min read",
  mediumHref:
    "https://medium.com/@sarthakmaurya04/deberta-understanding-how-microsoft-made-bert-better-f75a7a9f2495",
  tags: [
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Deep Learning",
    "Transformers",
  ],
  blocks: [
    {
      type: "p",
      text: "Transformers have a deceptively simple idea: take a *token*, compare it with every other *token*, and decide what it should pay attention to.",
    },
    {
      type: "p",
      text: "But there’s a subtle problem.\n**When a model calculates attention between two tokens, what information determines how much they should influence each other?**",
    },
    {
      type: "p",
      text: "Is it the content of those tokens? Or does their relative position in the sequence matter too?",
    },
    {
      type: "p",
      text: "I recently read the DeBERTa paper and what initially looked like another BERT variant turned out to be a much more interesting modification of the transformer architecture.",
    },

    {
      type: "h2",
      id: "before-deberta",
      text: "Before DeBERTa, What does BERT actually do?",
    },
    {
      type: "figure",
      src: "/blogs/deberta/bert-architecture.jpg",
      alt: "BERT Architecture diagram showing input embeddings, transformer encoder stack, and output heads",
      caption: "BERT Architecture",
    },
    {
      type: "p",
      text: "BERT (Bidirectional Encoder Representations from Transformers) is a Transformer-based language model that uses an encoder-only architecture. Unlike decoder-only models, which typically use causal attention to predict subsequent tokens, BERT can use context from both directions when building token representations.",
    },
    {
      type: "p",
      text: "At a high level, BERT consists of 4 modules:",
    },
    {
      type: "ul",
      items: [
        "Tokenizer: This module converts a piece of English text into a sequence of integers (tokens).",
        "Embedding: This module converts the sequence of tokens into an array of real-valued vectors representing the tokens.",
        "Encoder: A stack of Transformer layers that use self-attention and feed-forward networks to build contextual representations of the input.",
        "Task-specific head: Uses those representations to perform a task, such as predicting masked tokens or classifying text.",
      ],
    },
    {
      type: "p",
      text: "BERT is pretrained using self-supervised learning, most notably Masked Language Modeling (MLM), where some input tokens are masked and the model learns to predict them from their surrounding context.",
    },
    {
      type: "p",
      text: "But the component we’re particularly interested in is **self-attention**.",
    },
    {
      type: "p",
      text: "Self-attention allows each token to incorporate information from other tokens in the sequence. It does this by computing attention scores that determine how much information to gather from each token.",
    },
    {
      type: "p",
      text: "This is commonly expressed using the scaled dot-product attention equation:",
    },
    {
      type: "math",
      tex: "\\operatorname{Attention}(Q, K, V) = \\operatorname{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V",
    },
    {
      type: "p",
      text: "Here:",
    },
    {
      type: "ul",
      items: [
        "**Q (Queries):** Represent what each token is looking for.",
        "**K (Keys):** Represent what each token offers for comparison.",
        "**V (Values):** Contain the information that gets aggregated.",
        "**$d_k$:** The dimensionality of the key vectors.",
      ],
    },
    {
      type: "p",
      text: "First, $QK^T$ calculates compatibility scores between queries and keys. These scores are scaled and passed through softmax to produce attention weights. The weights are then applied to the value vectors to produce contextual representations.",
    },
    {
      type: "p",
      text: "Unlike recurrent neural networks (RNNs), which process sequences step by step, Transformer self-attention allows token positions to be processed in parallel within a layer.",
    },
    {
      type: "p",
      text: "This mechanism is powerful, but it raises an interesting question: **how should a model represent the content of a token separately from information about its position?**",
    },

    {
      type: "h2",
      id: "problem-with-position",
      text: "The problem with representing position",
    },
    {
      type: "p",
      text: "In BERT, token embeddings are combined with positional embeddings at the input layer. This gives the model information about both the content of a token and its absolute position in the sequence.",
    },
    {
      type: "p",
      text: "But content and position represent two different kinds of information.",
    },
    {
      type: "p",
      text: "Let’s take two sentences:",
    },
    {
      type: "p",
      text: "**“The cat chased the dog.”**",
    },
    {
      type: "p",
      text: "**“The dog chased the cat.”**",
    },
    {
      type: "figure",
      src: "/blogs/deberta/token-position-embeddings.jpg",
      alt: "Diagram showing token embeddings added to position embeddings at the input layer",
      caption: "Example Sentence",
    },
    {
      type: "p",
      text: "Both sentences contain exactly the same words, but their meanings are different. The words *cat* and *dog* exchange their roles because their positions in the sentence change.",
    },
    {
      type: "p",
      text: "This raises an interesting question: should the model treat a token’s content and its position as a single piece of information, or should it explicitly model how these two interact?",
    },
    {
      type: "p",
      text: "**Content tells the model what a token represents. Position tells the model where a token occurs in relation to other tokens.**",
    },
    {
      type: "p",
      text: "Both matter, but they aren’t the same thing.",
    },
    {
      type: "p",
      text: "This is the idea that motivates one of DeBERTa’s central contributions: **Disentangled Attention**.",
    },
    {
      type: "p",
      text: "Rather than relying only on representations that combine content and positional information at the input, DeBERTa explicitly models content and relative position separately when calculating attention scores.",
    },
    {
      type: "p",
      text: "Let’s see how it works.",
    },

    {
      type: "h2",
      id: "two-novel-techniques",
      text: "DeBERTa and Its Two Novel Techniques",
    },
    {
      type: "p",
      text: "DeBERTa (Decoding-enhanced BERT with Disentangled Attention) is a Transformer-based language model introduced by researchers at Microsoft. The paper proposes two main architectural techniques to improve upon existing pretrained language models such as BERT and RoBERTa.",
    },
    {
      type: "p",
      text: "**1. Disentangled Attention**",
    },
    {
      type: "p",
      text: "Instead of treating token content and positional information as a single representation when computing attention, DeBERTa represents content and relative position separately. It then explicitly models their interactions to calculate attention scores.",
    },
    {
      type: "p",
      text: "**2. Enhanced Mask Decoder**",
    },
    {
      type: "p",
      text: "DeBERTa also modifies the decoding layer used during masked language model pretraining. The Enhanced Mask Decoder incorporates absolute positional information when predicting masked tokens.",
    },
    {
      type: "p",
      text: "Together, these techniques change how the model represents relationships between tokens and predicts missing words. The paper also introduces a virtual adversarial training method for fine-tuning, aimed at improving generalization.",
    },

    {
      type: "h2",
      id: "disentangled-attention",
      text: "Disentangled Attention: Separating Content and Position",
    },
    {
      type: "p",
      text: "The word *disentangled* means separating distinct components instead of treating them as a single, mixed representation.",
    },
    {
      type: "p",
      text: "In BERT, token embeddings are combined with absolute positional embeddings at the input layer. DeBERTa takes a different approach when calculating attention: it maintains separate representations for content and relative position, allowing them to interact explicitly.",
    },
    {
      type: "p",
      text: "Let’s break this down.",
    },
    {
      type: "p",
      text: "**Content representation — What is the token?**",
    },
    {
      type: "p",
      text: "The content representation captures the information associated with a token. For example, in the sentence *“The cat chased the dog,”* the token *“cat”* has its own content representation.",
    },
    {
      type: "p",
      text: "**Relative position representation — Where is the token relative to another token?**",
    },
    {
      type: "p",
      text: "Instead of considering only the absolute position of a token in the sequence, DeBERTa represents the relative position between a pair of tokens. This includes information about their distance and direction.",
    },
    {
      type: "p",
      text: "Why does this matter?",
    },
    {
      type: "p",
      text: "Consider the phrase *“deep learning.”* The relationship between these words depends not only on their individual content but also on their relative positions. A model should be able to account for both when determining how much attention one token pays to another.",
    },
    {
      type: "p",
      text: "This leads to the central idea behind DeBERTa’s disentangled attention: **attention scores should reflect interactions between content and relative position, rather than relying on content interactions alone.**",
    },
    {
      type: "p",
      text: "The model computes three types of interactions:",
    },
    {
      type: "ol",
      items: [
        "**Content-to-Content:** How does the content of one token relate to the content of another?",
        "**Content-to-Position:** How does the query token’s content interact with the relative position of the other token?",
        "**Position-to-Content:** How does the relative position interact with the content of the other token?",
      ],
    },
    {
      type: "figure",
      src: "/blogs/deberta/disentangled-attention.jpg",
      alt: "DeBERTa Disentangled Attention diagram showing Content-to-Content, Content-to-Position, and Position-to-Content summed into A_ij",
    },
    {
      type: "p",
      text: "These three terms are combined to calculate the final attention scores.",
    },
    {
      type: "p",
      text: "Let’s now look at the algorithm to understand how DeBERTa computes each interaction.",
    },

    {
      type: "h2",
      id: "algorithm",
      text: "The Algorithm Behind Disentangled Attention",
    },
    {
      type: "p",
      text: "Now that we understand the intuition behind disentangled attention, let’s look at how DeBERTa actually computes it.",
    },
    {
      type: "p",
      text: "The algorithm takes three inputs:",
    },
    {
      type: "ul",
      items: [
        "$H$: The input hidden states representing the tokens.",
        "$P$: A set of relative-position embeddings.",
        "$\\delta$: A matrix that identifies the relative-position embedding associated with each pair of tokens.",
      ],
    },
    {
      type: "p",
      text: "Let’s walk through the computation step by step.",
    },
    {
      type: "p",
      text: "**Step 1: Generate content representations**",
    },
    {
      type: "p",
      text: "Given the input hidden states $H$, we first compute the query, key, and value representations:",
    },
    {
      type: "math-group",
      equations: ["Q_c = HW_{q,c}", "K_c = HW_{k,c}", "V_c = HW_{v,c}"],
    },
    {
      type: "p",
      text: "Here, $W_{q,c}$, $W_{k,c}$, and $W_{v,c}$ are learned projection matrices.",
    },
    {
      type: "p",
      text: "These are the content-based representations used to calculate attention and aggregate information from other tokens.",
    },
    {
      type: "p",
      text: "**Step 2: Generate relative-position representations**",
    },
    {
      type: "p",
      text: "Next, we project the relative-position embeddings into query and key representations:",
    },
    {
      type: "math-group",
      equations: ["Q_r = PW_{q,r}", "K_r = PW_{k,r}"],
    },
    {
      type: "p",
      text: "Unlike the content representations, these vectors encode relative-position information.",
    },
    {
      type: "p",
      text: "The model now has separate representations for token content and relative position, allowing it to calculate their interactions independently.",
    },
    {
      type: "p",
      text: "**Step 3: Calculate content-to-content attention**",
    },
    {
      type: "p",
      text: "This is the familiar attention computation used in standard Transformers:",
    },
    {
      type: "math",
      tex: "A_{c\\rightarrow c} = Q_c K_c^T",
    },
    {
      type: "p",
      text: "For a particular pair of tokens $i$ and $j$, the score is:",
    },
    {
      type: "math",
      tex: "Q_c[i] \\cdot K_c[j]",
    },
    {
      type: "p",
      text: "This measures the compatibility between the content of the query token and the content of the key token.",
    },
    {
      type: "p",
      text: "**Step 4: Calculate content-to-position attention**",
    },
    {
      type: "p",
      text: "The next component compares content queries with relative-position keys.",
    },
    {
      type: "p",
      text: "First, we calculate scores between the content queries and the available relative-position representations:",
    },
    {
      type: "math",
      tex: "\\widetilde{A}_{c\\rightarrow p} = Q_c K_r^T",
    },
    {
      type: "p",
      text: "However, these scores correspond to possible relative distances, not directly to every pair of tokens in the input.",
    },
    {
      type: "p",
      text: "We therefore use the relative-distance index $\\delta(i,j)$ to select the appropriate score for each token pair:",
    },
    {
      type: "math",
      tex: "\\widetilde{A}_{c\\rightarrow p}[i, \\delta(i,j)]",
    },
    {
      type: "p",
      text: "In other words, the model looks up the score associated with the relative position of token $j$ with respect to token $i$.",
    },
    {
      type: "p",
      text: "**Step 5: Calculate position-to-content attention**",
    },
    {
      type: "p",
      text: "DeBERTa also computes the interaction in the opposite direction: relative-position queries interacting with content keys.",
    },
    {
      type: "p",
      text: "For each token pair, this term can be expressed as:",
    },
    {
      type: "math",
      tex: "K_c[j] \\cdot Q_r[\\delta(j,i)]",
    },
    {
      type: "p",
      text: "Notice the reversed indices in $\\delta(j,i)$. The relative-position representation is selected according to the direction from token $j$ to token $i$.",
    },
    {
      type: "p",
      text: "This term allows the attention score to account for both the relative position and the content of the key token.",
    },
    {
      type: "p",
      text: "**Step 6: Combine the three attention components**",
    },
    {
      type: "p",
      text: "Once we have calculated the three components, we add them together:",
    },
    {
      type: "math",
      tex: "A_{c\\rightarrow c} + A_{c\\rightarrow p} + A_{p\\rightarrow c}",
    },
    {
      type: "p",
      text: "The resulting matrix contains the combined attention scores for every pair of tokens.",
    },
    {
      type: "p",
      text: "**Step 7: Scale, normalize, and aggregate values**",
    },
    {
      type: "p",
      text: "Finally, the combined attention scores are scaled, passed through softmax, and multiplied by the content-based value representations:",
    },
    {
      type: "math",
      tex: "H_o = \\operatorname{softmax}\\left(\\frac{\\widetilde{A}}{\\sqrt{3d}}\\right)V_c",
    },
    {
      type: "p",
      text: "The scaling factor $\\sqrt{3d}$ accounts for the three score components in this formulation.",
    },
    {
      type: "p",
      text: "Softmax converts the scores for each query token into attention weights, which are then used to compute a weighted combination of the value vectors.",
    },
    {
      type: "p",
      text: "The result, $H_o$, is the output representation produced by the attention mechanism.",
    },
    {
      type: "p",
      text: "**The key takeaway:** DeBERTa doesn’t simply calculate attention from token content. It combines content-to-content, content-to-position, and position-to-content interactions to calculate its attention scores.",
    },

    {
      type: "h2",
      id: "worked-example",
      text: "A Worked Example: Disentangled Attention in Action",
    },
    {
      type: "p",
      text: "Let’s take a simple sentence:",
    },
    {
      type: "p",
      text: "**“The cat chased the dog.”**",
    },
    {
      type: "p",
      text: "Suppose we want to calculate the attention score from the token **“chased”** to the token **“cat”**.",
    },
    {
      type: "p",
      text: "First, let’s look at their positions:",
    },
    {
      type: "figure",
      src: "/blogs/deberta/word-order.jpg",
      alt: "Diagram comparing 'The cat chased the dog' and 'The dog chased the cat' to illustrate word order",
    },
    {
      type: "p",
      text: "The token “cat” appears one position before “chased”.",
    },
    {
      type: "p",
      text: "*In standard scaled dot-product attention, the model computes a score by comparing the query and key representations. In BERT, these representations are derived from input embeddings that already incorporate absolute positional information.*",
    },
    {
      type: "math",
      tex: "Q_c[i] \\cdot K_c[j]",
    },
    {
      type: "p",
      text: "Here, $i$ is the position of “chased” and $j$ is the position of “cat”.",
    },
    {
      type: "p",
      text: "But DeBERTa takes this further by incorporating their relative position into the attention score.",
    },
    {
      type: "h3",
      id: "example-c2c",
      text: "1. Content-to-Content",
    },
    {
      type: "p",
      text: "First, the model compares the content representations of “chased” and “cat”.",
    },
    {
      type: "math",
      tex: "Q_c[\\text{chased}] \\cdot K_c[\\text{cat}]",
    },
    {
      type: "p",
      text: "This captures how compatible the two content representations are.",
    },
    {
      type: "h3",
      id: "example-c2p",
      text: "2. Content-to-Position",
    },
    {
      type: "p",
      text: "Next, the model combines the content of “chased” with the relative position of “cat”.",
    },
    {
      type: "math",
      tex: "Q_c[\\text{chased}] \\cdot K_r[\\delta(i,j)]",
    },
    {
      type: "p",
      text: "The model can therefore account for the fact that the key token occurs one position before the query token.",
    },
    {
      type: "p",
      text: "The relative offset is calculated as $i - j = 2 - 1 = +1$. In the paper, this offset is mapped to an index in the relative-position embedding table.",
    },
    {
      type: "h3",
      id: "example-p2c",
      text: "3. Position-to-Content",
    },
    {
      type: "p",
      text: "The model also calculates the interaction in the opposite direction: the relative position combined with the content of “cat”.",
    },
    {
      type: "math",
      tex: "Q_r[\\delta(j,i)] \\cdot K_c[\\text{cat}]",
    },
    {
      type: "p",
      text: "Notice that the order of the indices is reversed. For this term, the relative offset is $j - i = 1 - 2 = -1$, which corresponds to the opposite direction in the relative-position embedding table.",
    },
    {
      type: "p",
      text: "This lets the model represent the positional relationship from the key token’s perspective as well.",
    },
    {
      type: "h3",
      id: "example-combining",
      text: "Combining the three interactions",
    },
    {
      type: "p",
      text: "The final attention score combines all three components:",
    },
    {
      type: "math",
      tex: "A_{c\\rightarrow c}[i,j] + A_{c\\rightarrow p}[i,j] + A_{p\\rightarrow c}[i,j]",
    },
    {
      type: "p",
      text: "The model repeats this computation for the other token pairs, scales the resulting attention scores, and applies softmax to obtain attention weights.",
    },
    {
      type: "p",
      text: "These weights are then used to aggregate the value vectors, producing contextual representations for the next layer.",
    },
    {
      type: "p",
      text: "**The key idea:** The attention score depends not only on the content of the two tokens, but also on their relative position. DeBERTa models these interactions separately and combines them when calculating attention.",
    },

    {
      type: "h2",
      id: "enhanced-mask-decoder",
      text: "Enhanced Mask Decoder: Why Absolute Position Matters",
    },
    {
      type: "p",
      text: "So far, we’ve seen how DeBERTa separates content and relative-position information when calculating attention. But there’s another question: **how does the model use positional information when predicting a missing token?**",
    },
    {
      type: "p",
      text: "Like BERT, DeBERTa uses Masked Language Modeling (MLM) during pre-training. The model is given a sentence with selected tokens replaced by `[MASK]` and learns to predict the missing words from the surrounding context.",
    },
    {
      type: "p",
      text: "Consider the sentence:",
    },
    {
      type: "p",
      text: "**“A new store opened beside the new mall.”**",
    },
    {
      type: "p",
      text: "Suppose we mask *store* and *mall*:",
    },
    {
      type: "p",
      text: "**“A new [MASK] opened beside the new [MASK].”**",
    },
    {
      type: "figure",
      src: "/blogs/deberta/enhanced-mask-decoder.png",
      alt: "Enhanced Mask Decoder architecture diagram showing absolute position input I feeding into queries Q alongside hidden states H",
      caption: "Enhanced Mask Decoder",
    },
    {
      type: "p",
      text: "Both masked tokens follow a word such as *new*, so their local contexts share a similar relative-position pattern. Yet the two words play different syntactic roles: *store* is the subject of *opened*, while *mall* appears in the phrase *beside the new mall*.",
    },
    {
      type: "p",
      text: "This illustrates a limitation of relying on local context and relative positions alone. The model can benefit from additional information about where the masked token occurs in the overall sentence.",
    },
    {
      type: "h3",
      id: "how-deberta-addresses",
      text: "How does DeBERTa address this?",
    },
    {
      type: "p",
      text: "BERT incorporates absolute positional embeddings at the input layer, before the Transformer layers process the sequence.",
    },
    {
      type: "p",
      text: "DeBERTa takes a different approach. It uses relative-position information throughout the Transformer layers and introduces absolute positional information in the decoding component, after the Transformer layers and before the softmax layer used for masked-token prediction.",
    },
    {
      type: "p",
      text: "This component is called the **Enhanced Mask Decoder (EMD)**.",
    },
    {
      type: "p",
      text: "The distinction is important:",
    },
    {
      type: "ul",
      items: [
        "**Disentangled attention** models interactions between token content and relative position throughout the encoder.",
        "**Enhanced Mask Decoder** incorporates absolute position information when the model predicts masked tokens.",
      ],
    },
    {
      type: "p",
      text: "The idea is to let the encoder learn content and relative-position relationships without introducing absolute positional embeddings at the input in the same way as BERT, then use absolute position as complementary information during prediction.",
    },
    {
      type: "p",
      text: "In other words, DeBERTa doesn’t treat relative and absolute positions as interchangeable. It uses them at different stages for different purposes.",
    },

    {
      type: "h2",
      id: "putting-deberta-together",
      text: "Putting DeBERTa Together",
    },
    {
      type: "p",
      text: "We’ve now explored the two main architectural contributions of DeBERTa. Let’s look at how they fit together.",
    },
    {
      type: "p",
      text: "During pre-training, DeBERTa processes a sequence through Transformer layers that use disentangled attention. Instead of relying only on content-based attention scores, these layers explicitly model interactions between token content and relative positions.",
    },
    {
      type: "p",
      text: "The resulting contextual representations are then passed to the Enhanced Mask Decoder, which incorporates absolute positional information to help predict the masked tokens.",
    },
    {
      type: "figure",
      src: "/blogs/deberta/bert-vs-deberta.jpg",
      alt: "Comparison diagram between BERT (injecting absolute position at input) and DeBERTa (using relative position in encoder and injecting absolute position in Enhanced Mask Decoder)",
    },
    {
      type: "p",
      text: "The overall process can be summarized as follows:",
    },
    {
      type: "p",
      text: "**1. Input sequence**",
    },
    {
      type: "p",
      text: "The text is tokenized and converted into the model’s input representations.",
    },
    {
      type: "p",
      text: "**2. Transformer encoder with Disentangled Attention**",
    },
    {
      type: "p",
      text: "The encoder processes the sequence through multiple Transformer layers. Within each attention layer, content-to-content, content-to-position, and position-to-content interactions contribute to the attention scores.",
    },
    {
      type: "p",
      text: "**3. Enhanced Mask Decoder**",
    },
    {
      type: "p",
      text: "During masked language model pre-training, the decoder combines contextual information with absolute positional information to support masked-token prediction.",
    },
    {
      type: "p",
      text: "**4. Prediction**",
    },
    {
      type: "p",
      text: "The model produces scores over the vocabulary and learns to predict the original masked tokens.",
    },
    {
      type: "p",
      text: "Alongside these architectural changes, the paper also introduces a virtual adversarial training approach for fine-tuning, intended to improve generalization on downstream tasks.",
    },
    {
      type: "p",
      text: "The key takeaway is that DeBERTa doesn’t replace the Transformer encoder. It changes how positional information participates in attention and how absolute position is incorporated during masked-token prediction.",
    },

    {
      type: "h2",
      id: "experiments",
      text: "What Did the Experiments Actually Show?",
    },
    {
      type: "p",
      text: "An interesting architecture is one thing, but does it actually improve performance?",
    },
    {
      type: "p",
      text: "To investigate this, the DeBERTa paper evaluates the model on several natural language understanding benchmarks, including GLUE, MNLI, SQuAD, and RACE.",
    },
    {
      type: "p",
      text: "Let’s look at a few of the results.",
    },
    {
      type: "h3",
      id: "deberta-vs-roberta",
      text: "1. DeBERTa vs. RoBERTa",
    },
    {
      type: "p",
      text: "The following results are reported in the original paper for the large models:",
    },
    {
      type: "p",
      text: "**MNLI-m (Accuracy)**",
    },
    {
      type: "ul",
      items: ["RoBERTa-Large: 90.2%", "DeBERTa-Large: 91.1%"],
    },
    {
      type: "p",
      text: "**SQuAD 1.1 (F1 Score)**",
    },
    {
      type: "ul",
      items: ["RoBERTa-Large: 94.6", "DeBERTa-Large: 95.5"],
    },
    {
      type: "p",
      text: "**SQuAD 2.0 (F1 Score)**",
    },
    {
      type: "ul",
      items: ["RoBERTa-Large: 88.4", "DeBERTa-Large: 90.7"],
    },
    {
      type: "p",
      text: "**RACE (Accuracy)**",
    },
    {
      type: "ul",
      items: ["RoBERTa-Large: 83.2%", "DeBERTa-Large: 86.8%"],
    },
    {
      type: "p",
      text: "Across these benchmarks, DeBERTa-Large outperforms RoBERTa-Large. The difference is particularly noticeable on RACE, where DeBERTa achieves an improvement of 3.6 percentage points.",
    },
    {
      type: "p",
      text: "The authors also report that DeBERTa-Large was pretrained using approximately half the training data used for RoBERTa-Large. This makes the results particularly interesting, although performance still depends on the task and evaluation setting.",
    },
    {
      type: "h3",
      id: "ablation-study",
      text: "2. The Ablation Study: Which Components Matter?",
    },
    {
      type: "p",
      text: "The benchmark results show that DeBERTa performs well, but they don’t tell us which architectural changes contributed to the improvement.",
    },
    {
      type: "p",
      text: "This is where the **ablation study** becomes important.",
    },
    {
      type: "p",
      text: "An ablation study involves removing or modifying individual components of a model and observing how the results change. The authors use this approach to investigate the contributions of the Enhanced Mask Decoder and the two positional interaction terms in disentangled attention.",
    },
    {
      type: "p",
      text: "In the paper’s RACE experiments with DeBERTa-Base, the authors report the following results:",
    },
    {
      type: "ul",
      items: [
        "**Full DeBERTa-Base:** 71.7% accuracy",
        "**Without the Enhanced Mask Decoder:** 70.3% accuracy",
        "**Without Content-to-Position attention:** 69.3% accuracy",
        "**Without Position-to-Content attention:** 69.6% accuracy",
      ],
    },
    {
      type: "p",
      text: "Removing the Enhanced Mask Decoder reduces accuracy by 1.4 percentage points. Removing either positional interaction term results in a larger drop in this experiment.",
    },
    {
      type: "p",
      text: "These findings suggest that both positional interaction terms contribute useful information beyond ordinary content-to-content attention, while the Enhanced Mask Decoder provides an additional benefit during pretraining.",
    },
    {
      type: "p",
      text: "The results don’t prove that every component will improve every task equally, but they support the motivation behind DeBERTa’s architectural design.",
    },
    {
      type: "h3",
      id: "what-can-we-conclude",
      text: "What can we conclude?",
    },
    {
      type: "p",
      text: "The experiments provide evidence that DeBERTa’s architectural changes are useful across several natural language understanding benchmarks.",
    },
    {
      type: "p",
      text: "For me, the most interesting finding isn’t simply that DeBERTa achieves higher scores than RoBERTa. It’s that the ablation study investigates whether explicitly modeling content-position interactions and incorporating absolute position during masked-token prediction actually matter.",
    },
    {
      type: "p",
      text: "This brings us back to the central idea behind the paper: **content and position carry different information, and how a model uses them can affect the quality of its learned representations.**",
    },

    {
      type: "h2",
      id: "what-i-learned",
      text: "What I Learned From Reading the DeBERTa Paper",
    },
    {
      type: "p",
      text: "After going through the paper, three ideas stood out to me.",
    },
    {
      type: "p",
      text: "**1. Positional information is more than just telling the model where a token is.**",
    },
    {
      type: "p",
      text: "Before looking into DeBERTa, it’s easy to think of positional embeddings as a way to tell a Transformer the order of tokens in a sequence.",
    },
    {
      type: "p",
      text: "DeBERTa made me think about position differently. The relative position between two tokens can itself contribute to their attention score. Instead of treating position merely as information added at the input, DeBERTa explicitly models how content and relative position interact during attention.",
    },
    {
      type: "p",
      text: "**2. Attention doesn’t have to be just a content-to-content interaction.**",
    },
    {
      type: "p",
      text: "We’re used to seeing the familiar equation:",
    },
    {
      type: "math",
      tex: "\\operatorname{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V",
    },
    {
      type: "p",
      text: "DeBERTa expands the way attention scores are calculated by incorporating content-to-position and position-to-content interactions alongside content-to-content attention.",
    },
    {
      type: "p",
      text: "What I found interesting is that this doesn’t require abandoning the Transformer architecture. Instead, the paper rethinks how information flows through one of its most important components.",
    },
    {
      type: "p",
      text: "**3. A better architecture needs experimental evidence, not just an interesting idea.**",
    },
    {
      type: "p",
      text: "The ablation studies are an important part of the paper because they investigate what happens when individual components are removed.",
    },
    {
      type: "p",
      text: "This reinforces something I find important about machine learning research: an architectural idea can sound convincing in theory, but experiments help us understand whether it actually contributes to performance.",
    },
    {
      type: "p",
      text: "For me, DeBERTa is a useful example of how carefully reconsidering the representation of information can lead to meaningful improvements without requiring an entirely new model architecture.",
    },

    {
      type: "h2",
      id: "final-thoughts",
      text: "Final Thoughts",
    },
    {
      type: "p",
      text: "DeBERTa is an interesting example of how improving a Transformer doesn’t necessarily mean replacing its entire architecture.",
    },
    {
      type: "p",
      text: "Its central idea is to treat token content and positional information as distinct sources of information that can interact explicitly. Disentangled attention uses these interactions to calculate attention scores, while the Enhanced Mask Decoder incorporates absolute positional information into masked-token prediction.",
    },
    {
      type: "p",
      text: "The paper’s results suggest that these changes can improve performance across several natural language understanding tasks.",
    },
    {
      type: "p",
      text: "But the part I find most interesting isn’t simply that DeBERTa performs better on those benchmarks. It’s the reasoning behind the design: **how we represent information, and how different types of information interact, can matter just as much as the architecture that processes them.**",
    },
    {
      type: "p",
      text: "That was my biggest takeaway from reading the paper.",
    },
  ],
};
