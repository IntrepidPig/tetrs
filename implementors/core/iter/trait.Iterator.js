(function() {var implementors = {};
implementors['rand'] = ["impl&lt;'a, T: <a class='trait' href='rand/trait.Rand.html' title='rand::Rand'>Rand</a>, R: <a class='trait' href='rand/trait.Rng.html' title='rand::Rng'>Rng</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='rand/struct.Generator.html' title='rand::Generator'>Generator</a>&lt;'a, T, R&gt;","impl&lt;'a, R: <a class='trait' href='rand/trait.Rng.html' title='rand::Rng'>Rng</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='rand/struct.AsciiGenerator.html' title='rand::AsciiGenerator'>AsciiGenerator</a>&lt;'a, R&gt;",];implementors['itertools'] = ["impl&lt;I, J&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Interleave.html' title='itertools::Interleave'>Interleave</a>&lt;I, J&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, J: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=I::Item&gt;</span>","impl&lt;I, J&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.InterleaveShortest.html' title='itertools::InterleaveShortest'>InterleaveShortest</a>&lt;I, J&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, J: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=I::Item&gt;</span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.PutBack.html' title='itertools::PutBack'>PutBack</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.PutBackN.html' title='itertools::PutBackN'>PutBackN</a>&lt;I&gt;","impl&lt;I, J&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Product.html' title='itertools::Product'>Product</a>&lt;I, J&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, J: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;B, F, I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Batching.html' title='itertools::Batching'>Batching</a>&lt;I, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;mut I) -&gt; <a class='enum' href='https://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;B&gt;</span>","impl&lt;K, I, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.GroupBy.html' title='itertools::GroupBy'>GroupBy</a>&lt;K, I, F&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html' title='core::cmp::PartialEq'>PartialEq</a>, I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;I::Item) -&gt; K</span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Step.html' title='itertools::Step'>Step</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;I, J&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Merge.html' title='itertools::Merge'>Merge</a>&lt;I, J&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, J: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=I::Item&gt;, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a></span>","impl&lt;I, J, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.MergeBy.html' title='itertools::MergeBy'>MergeBy</a>&lt;I, J, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, J: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=I::Item&gt;, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;I::Item, &amp;I::Item) -&gt; <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.MultiPeek.html' title='itertools::MultiPeek'>MultiPeek</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;I, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Coalesce.html' title='itertools::Coalesce'>Coalesce</a>&lt;I, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(I::Item, I::Item) -&gt; <a class='enum' href='https://doc.rust-lang.org/nightly/core/result/enum.Result.html' title='core::result::Result'>Result</a>&lt;I::Item, <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>I::Item, I::Item<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt;</span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Dedup.html' title='itertools::Dedup'>Dedup</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html' title='core::cmp::PartialEq'>PartialEq</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.MendSlices.html' title='itertools::MendSlices'>MendSlices</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: <a class='trait' href='itertools/misc/trait.MendSlice.html' title='itertools::misc::MendSlice'>MendSlice</a></span>","impl&lt;'a, I, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.TakeWhileRef.html' title='itertools::TakeWhileRef'>TakeWhileRef</a>&lt;'a, I, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;I::Item) -&gt; <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a></span>","impl&lt;I, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.WhileSome.html' title='itertools::WhileSome'>WhileSome</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=<a class='enum' href='https://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;A&gt;&gt;</span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Combinations.html' title='itertools::Combinations'>Combinations</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.CombinationsN.html' title='itertools::CombinationsN'>CombinationsN</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I, V, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.UniqueBy.html' title='itertools::UniqueBy'>UniqueBy</a>&lt;I, V, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;I::Item) -&gt; V</span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Unique.html' title='itertools::Unique'>Unique</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Flatten.html' title='itertools::Flatten'>Flatten</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.IntoIterator.html' title='core::iter::IntoIterator'>IntoIterator</a></span>","impl&lt;'a, K, I, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Groups.html' title='itertools::Groups'>Groups</a>&lt;'a, K, I, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: 'a, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;I::Item) -&gt; K, K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html' title='core::cmp::PartialEq'>PartialEq</a></span>","impl&lt;'a, K, I, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Group.html' title='itertools::Group'>Group</a>&lt;'a, K, I, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: 'a, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;I::Item) -&gt; K, K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html' title='core::cmp::PartialEq'>PartialEq</a></span>","impl&lt;'a, I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Chunks.html' title='itertools::Chunks'>Chunks</a>&lt;'a, I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: 'a</span>","impl&lt;'a, I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Chunk.html' title='itertools::Chunk'>Chunk</a>&lt;'a, I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: 'a</span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Intersperse.html' title='itertools::Intersperse'>Intersperse</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.ISlice.html' title='itertools::ISlice'>ISlice</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.KMerge.html' title='itertools::KMerge'>KMerge</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Linspace.html' title='itertools::Linspace'>Linspace</a>&lt;F&gt; <span class='where'>where F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;Output=F&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Mul.html' title='core::ops::Mul'>Mul</a>&lt;Output=F&gt;, <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>: <a class='trait' href='itertools/misc/trait.ToFloat.html' title='itertools::misc::ToFloat'>ToFloat</a>&lt;F&gt;</span>","impl&lt;X, T, I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/misc/struct.FlatTuples.html' title='itertools::misc::FlatTuples'>FlatTuples</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>T, X<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt;, T: <a class='trait' href='itertools/misc/trait.AppendTuple.html' title='itertools::misc::AppendTuple'>AppendTuple</a>&lt;X&gt;</span>","impl&lt;I, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.PadUsing.html' title='itertools::PadUsing'>PadUsing</a>&lt;I, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>) -&gt; I::Item</span>","impl&lt;A, I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.RcIter.html' title='itertools::RcIter'>RcIter</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=A&gt;</span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.RepeatN.html' title='itertools::RepeatN'>RepeatN</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.RepeatCall.html' title='itertools::RepeatCall'>RepeatCall</a>&lt;F&gt; <span class='where'>where F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>() -&gt; A</span>","impl&lt;A, St, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Unfold.html' title='itertools::Unfold'>Unfold</a>&lt;St, F&gt; <span class='where'>where F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;mut St) -&gt; <a class='enum' href='https://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;A&gt;</span>","impl&lt;'a, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Stride.html' title='itertools::Stride'>Stride</a>&lt;'a, A&gt;","impl&lt;'a, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.StrideMut.html' title='itertools::StrideMut'>StrideMut</a>&lt;'a, A&gt;","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Tee.html' title='itertools::Tee'>Tee</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;T, U&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.ZipLongest.html' title='itertools::ZipLongest'>ZipLongest</a>&lt;T, U&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, U: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>A,<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;A, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>A, B<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;A, B, C&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>A, B, C<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;A, B, C, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>A, B, C, D<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;A, B, C, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>A, B, C, D, E<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;A, B, C, D, E, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>A, B, C, D, E, F<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;A, B, C, D, E, F, G&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>A, B, C, D, E, F, G<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, G: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;A, B, C, D, E, F, G, H&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>A, B, C, D, E, F, G, H<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, G: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, H: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;A, B, C, D, E, F, G, H, I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>A, B, C, D, E, F, G, H, I<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, G: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, H: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;T, U&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.ZipSlices.html' title='itertools::ZipSlices'>ZipSlices</a>&lt;T, U&gt; <span class='where'>where T: <a class='trait' href='itertools/misc/trait.Slice.html' title='itertools::misc::Slice'>Slice</a>, U: <a class='trait' href='itertools/misc/trait.Slice.html' title='itertools::misc::Slice'>Slice</a></span>",];implementors['tetrs'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='tetrs/randomizer/bag_randomizer/struct.BagRandomizer.html' title='tetrs::randomizer::bag_randomizer::BagRandomizer'>BagRandomizer</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
